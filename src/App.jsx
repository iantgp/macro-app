import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen, Calculator, BrainCircuit, CheckCircle2, XCircle, GraduationCap, Trophy, RefreshCw } from 'lucide-react';

// --- DATA: CORE FLASHCARDS (THEORY & CONCEPTS) ---
const flashcardsData = [
  { id: 'f1', chapter: "Ch 21: The Big Picture", question: "What is the Business Cycle?", answer: "The short-run alternation between economic downturns (recessions/contractions) and economic upturns (expansions/recoveries). Peaks and troughs mark the turning points." },
  { id: 'f2', chapter: "Ch 21: The Big Picture", question: "What is the Paradox of Thrift?", answer: "When families/businesses worry about economic hard times, they cut spending. This reduction in spending depresses the economy, potentially leaving them worse off than if they hadn't tried to act responsibly." },
  { id: 'f3', chapter: "Ch 22: GDP and CPI", question: "What is included in GDP?", answer: "Only domestically produced FINAL goods and services. It excludes intermediate goods, used goods, financial assets (stocks/bonds), and goods produced outside the country." },
  { id: 'f4', chapter: "Ch 22: GDP and CPI", question: "What is the difference between Nominal and Real GDP?", answer: "Nominal GDP calculates the value of goods using current year prices.\nReal GDP calculates the value of goods using the prices of a selected base year (adjusting for inflation)." },
  { id: 'f5', chapter: "Ch 23: Unemployment and Inflation", question: "What are the three types of unemployment?", answer: "1. Frictional: Time spent in job search.\n2. Structural: More job seekers than jobs available at the current wage (caused by min wage, unions, efficiency wages).\n3. Cyclical: Deviation from the natural rate due to the business cycle.\n\nNatural Rate = Frictional + Structural" },
  { id: 'f6', chapter: "Ch 23: Unemployment and Inflation", question: "What are Shoe-leather and Menu costs of inflation?", answer: "Shoe-leather costs: Increased costs of transactions (wasting time running to the bank to avoid holding depreciating cash).\n\nMenu costs: The real cost of physically changing listed prices." },
  { id: 'f7', chapter: "Ch 24: Long-Run Economic Growth", question: "What drives long-run productivity growth?", answer: "1. Physical capital (machines, buildings)\n2. Human capital (education, knowledge)\n3. Technological progress (Total Factor Productivity / TFP)." },
  { id: 'f8', chapter: "Ch 24: Long-Run Economic Growth", question: "What is the Convergence Hypothesis?", answer: "Differences in real GDP per capita among countries tend to narrow over time, as poorer countries grow faster than richer ones to catch up." },
  { id: 'f9', chapter: "Ch 25: Savings & Financial System", question: "What are the three main tasks of a financial system?", answer: "1. Reducing transaction costs\n2. Reducing financial risk (via diversification)\n3. Providing liquidity" },
  { id: 'f10', chapter: "Ch 25: Savings & Financial System", question: "What is the Fisher Effect?", answer: "An increase in expected future inflation drives up the nominal interest rate exactly, leaving the expected real interest rate unchanged." },
  { id: 'f11', chapter: "Ch 26: Income and Expenditure", question: "What is Unplanned Inventory Investment?", answer: "Unplanned changes in inventories that occur when actual sales are more or less than businesses expected. It acts as a leading economic indicator. (When positive, GDP falls; when negative, GDP rises)." },
  { id: 'f12', chapter: "Ch 27: AD and AS", question: "Why does the Aggregate Demand (AD) curve slope downward?", answer: "1. The Wealth Effect: Higher price level reduces purchasing power of wealth, reducing consumption.\n2. The Interest Rate Effect: Higher price level increases money demand, raising interest rates, which reduces investment." },
  { id: 'f13', chapter: "Ch 27: AD and AS", question: "What causes shifts in the SRAS vs. LRAS curves?", answer: "SRAS shifts due to changes in commodity prices, nominal wages, or productivity.\n\nLRAS represents potential output if all prices/wages were fully flexible. It shifts due to changes in resources (Capital, Labor) or Technology (TFP)." },
  { id: 'f14', chapter: "Ch 28: Fiscal Policy", question: "What is Expansionary vs. Contractionary Fiscal Policy?", answer: "Expansionary (shifts AD right): Increase gov purchases, cut taxes, increase gov transfers.\n\nContractionary (shifts AD left): Decrease gov purchases, raise taxes, decrease gov transfers." },
  { id: 'f15', chapter: "Ch 28: Fiscal Policy", question: "What are Automatic Stabilizers?", answer: "Government spending and taxation rules that automatically become expansionary in recessions and contractionary in expansions (e.g., progressive income taxes, unemployment insurance) without deliberate policy action." },
  { id: 'f16', chapter: "Ch 29: Money, Banking, & Fed", question: "What are the roles and types of money?", answer: "Roles: Medium of exchange, Store of value, Unit of account.\n\nTypes: Commodity money (gold), Commodity-backed money, and Fiat money (value derives entirely from official government status)." },
  { id: 'f17', chapter: "Ch 29: Money, Banking, & Fed", question: "What are the Fed's primary tools?", answer: "1. Open-market operations (buying T-bills increases money supply/reserves; selling decreases it).\n2. Discount window lending.\n3. Reserve requirements." },
  { id: 'f18', chapter: "Ch 30: Monetary Policy", question: "What shifts the Money Demand curve?", answer: "1. Changes in aggregate price level\n2. Changes in real GDP\n3. Changes in technology (e.g., credit cards)\n4. Changes in institutions" },
  { id: 'f19', chapter: "Ch 30: Monetary Policy", question: "What is Monetary Neutrality?", answer: "The concept that in the long run, changes in the money supply affect the aggregate price level proportionately, but do not affect real GDP or the interest rate." },
  { id: 'f20', chapter: "Ch 31: Inflation & Deflation", question: "What is the NAIRU?", answer: "Non-Accelerating Inflation Rate of Unemployment: The unemployment rate at which inflation does not change over time. It represents the Long-Run Phillips Curve (which is vertical)." },
  { id: 'f21', chapter: "Ch 31: Inflation & Deflation", question: "What is Debt Deflation?", answer: "The reduction in aggregate demand arising from the increase in the real burden of outstanding debt caused by deflation. (Borrowers lose, cutting spending; lenders gain but don't increase spending)." },
  { id: 'f22', chapter: "Ch 32: Events and Ideas", question: "What was Keynes's core argument?", answer: "Economic slumps are caused by inadequate spending. He proved the short-run matters, arguing for macroeconomic policy activism (fiscal and monetary) to smooth the business cycle." },
  { id: 'f23', chapter: "Ch 33: International Macroeconomics", question: "What is the 'Impossible Trinity' (Trilemma)?", answer: "A country cannot simultaneously have: \n1. Free movement of capital\n2. An independent monetary policy\n3. A fixed exchange rate." }
];

// --- DATA: PRACTICE LAB (COMPUTATIONS - EXPANDED MULTIPLE PER TOPIC) ---
const practiceData = [
  // COMP 1 & 9: Flow & Savings
  { id: 'p1', chapter: "Ch 25: Savings & Financial System", topic: "COMP 1 & 9: Closed Economy Savings Identity", question: "In a closed economy: GDP = $1,000M, Consumer Spending (C) = $850M, Taxes (T) = $50M, Government Purchases (G) = $100M. \n\nCalculate Investment Spending (I), Private Savings, and the Budget Balance.", solution: "1. Investment Spending (I) = GDP - C - G = 1,000 - 850 - 100 = $50M\n2. Private Savings = GDP - T - C = 1,000 - 50 - 850 = $100M\n3. Budget Balance = T - G = 50 - 100 = -$50M (Deficit)\n(National Savings = Private + Budget = 100 - 50 = $50M = I)" },
  { id: 'p2', chapter: "Ch 25: Savings & Financial System", topic: "COMP 1 & 9: Open Economy Savings Identity", question: "In an open economy:\nExports (X) = $125M\nImports (IM) = $80M\nBudget Balance = -$200M (Deficit)\nInvestment Spending (I) = $350M\n\nCalculate Private Savings.", solution: "Identity: I = Private Savings + Budget Balance + Net Capital Inflow (IM - X)\n\n350 = Private Savings + (-200) + (80 - 125)\n350 = Private Savings - 200 - 45\n350 = Private Savings - 245\n\nPrivate Savings = 350 + 245 = $595M" },
  { id: 'p3', chapter: "Ch 25: Savings & Financial System", topic: "COMP 9: Capital Inflow / Outflow", question: "Capsland has Investment Spending = 20% of GDP, Private Savings = 10% of GDP, and Net Capital Inflow = 5% of GDP.\n\nCalculate the Budget Balance as a % of GDP.", solution: "I = Private Savings + Budget Balance + Net Capital Inflow\n20% = 10% + Budget Balance + 5%\n20% = 15% + Budget Balance\nBudget Balance = 5% (Surplus)" },

  // COMP 2: GDP Methods
  { id: 'p4', chapter: "Ch 22: GDP and CPI", topic: "COMP 2: Value Add vs Final Sales vs Factor Income", question: "A bread company sells $50 of bread to a pizza company (Wages = 15). \nA cheese company sells $35 of cheese to the pizza company (Wages = 20). \nThe pizza company sells $200 of pizza to consumers (Wages = 75).\n\nCalculate GDP using all three methods.", solution: "(A) Value-Added:\nBread: $50, Cheese: $35, Pizza: $200 - $50 - $35 = $115. Total = $200\n\n(B) Final Goods:\nOnly pizza is sold to final consumers = $200\n\n(C) Factor Income (Wages + Profits):\nBread: W=15, Profit=(50-15)=35\nCheese: W=20, Profit=(35-20)=15\nPizza: W=75, Profit=(200-85-75)=40\nTotal GDP = (15+35) + (20+15) + (75+40) = $200" },

  // COMP 3 & 4: Deflator, CPI, Inflation
  { id: 'p5', chapter: "Ch 22: GDP and CPI", topic: "COMP 3: Nominal vs Real GDP & Deflator", question: "In 2013, Nominal GDP is $16,785B and Real GDP is $16,495B.\nIn 2014, Nominal GDP is $17,527B and Real GDP is $16,912B.\n\nCalculate the GDP Deflator for both years and the resulting Inflation Rate.", solution: "1. Deflator 2013: (16,785 / 16,495) × 100 = 101.8\n2. Deflator 2014: (17,527 / 16,912) × 100 = 103.6\n3. Inflation Rate: [(103.6 - 101.8) / 101.8] × 100 = 1.8%" },
  { id: 'p6', chapter: "Ch 22: GDP and CPI", topic: "COMP 4: Price Index & Inflation", question: "A pre-frost market basket costs $95.00.\nAfter the frost, the exact same market basket costs $175.00.\n\nAssuming the pre-frost period is the base year (Index = 100), calculate the post-frost Price Index and the Inflation Rate.", solution: "1. Price Index: ($175.00 / $95.00) × 100 = 184.2\n2. Inflation Rate: [(184.2 - 100) / 100] × 100 = 84.2%" },

  // COMP 5: Employment
  { id: 'p7', chapter: "Ch 23: Unemployment and Inflation", topic: "COMP 5: Employment Aggregates", question: "In the South region, the Labor Force is 60,909k and the number of Unemployed is 2,074k. The total adult population is 100,000k.\n\nCalculate the Number of Employed, the Unemployment Rate, and the LF Participation Rate.", solution: "1. Employed: 60,909k - 2,074k = 58,835k\n2. Unemployment Rate: (2,074 / 60,909) × 100 = 3.4%\n3. LF Participation Rate: (60,909 / 100,000) × 100 = 60.9%" },

  // COMP 6: Winners & Losers (Debt Deflation)
  { id: 'p8', chapter: "Ch 25: Savings & Financial System", topic: "COMP 6: Inflation Winners and Losers", question: "Lynn lends Boris $10,000 at a nominal interest rate of 8%. Both expect 5% inflation (a 3% real interest rate).\n\nIf actual inflation is 4%, calculate the actual real interest rate. Who is the winner?", solution: "Actual Real Interest Rate = Nominal Rate - Actual Inflation = 8% - 4% = 4%\n\nBecause the real interest rate (4%) is higher than expected (3%), the lender (Lynn) WINS. She receives a higher real return than expected." },
  { id: 'p9', chapter: "Ch 31: Inflation & Deflation", topic: "COMP 6: Debt Deflation (Losers)", question: "The Miller family takes a mortgage of $100,000 to buy a house worth $105,000. During the first year, prices unexpectedly fall by 10% (Deflation).\n\nWho are the winners and losers?", solution: "The value of the house falls to $94,500. They still owe $100,000.\nThe Millers (Borrowers) LOSE because the real burden of their debt increased, and their asset is underwater.\nThe Mortgage Company (Lender) theoretically WINS (money repaid is worth more), but risks default if the Millers walk away." },

  // COMP 7 & 8: Rule of 70 & Production
  { id: 'p10', chapter: "Ch 24: Long-Run Economic Growth", topic: "COMP 7: Rule of 70", question: "High-income countries have an average annual growth rate of 1.0%.\nMiddle-income countries grow at 3.6%.\n\nCalculate the number of years it will take each group to double their per capita GDP.", solution: "High-income: 70 / 1.0 = 70 years to double.\nMiddle-income: 70 / 3.6 = 19.4 years to double." },
  { id: 'p11', chapter: "Ch 24: Long-Run Economic Growth", topic: "COMP 8: Potential GDP & Production Function", question: "Using Y = T × K^α.\nAt Point A: Real GDP (Y) is 30,000 and Physical Capital (K) is 20,000.\nAt Point B: Real GDP (Y) is 50,000 and Physical Capital (K) is 40,000.\n\nCalculate the coefficient α.", solution: "α = ln(Y2/Y1) / ln(K2/K1)\nY2/Y1 = 50,000 / 30,000 = 5/3\nK2/K1 = 40,000 / 20,000 = 2\n\nα = ln(5/3) / ln(2) = 0.5108 / 0.6931 = 0.736" },

  // COMP 10, 11, 12: Income Expenditure
  { id: 'p12', chapter: "Ch 26: Income and Expenditure", topic: "COMP 10: Consumption Function Parameters", question: "At a disposable income of $20,000, consumer spending is $15,000.\nAt $40,000 disposable income, spending is $29,000.\n\nCalculate the MPC, the autonomous consumer spending (a), and write the consumption function.", solution: "1. MPC = (29,000 - 15,000) / (40,000 - 20,000) = 14,000 / 20,000 = 0.7\n2. Autonomous Spending (a) = 15,000 - (0.7 × 20,000) = 1,000\n3. Function: c = 1000 + 0.7yd" },
  { id: 'p13', chapter: "Ch 28: Fiscal Policy", topic: "COMP 11: Multiplier (Purchases vs Transfers)", question: "The MPC is 0.6. \nCalculate the total change in Real GDP if:\n1. The government reduces purchases (G) by $10 billion.\n2. The government reduces transfers (TR) by $10 billion.", solution: "1. Gov Purchases Multiplier = 1 / (1 - MPC) = 1 / 0.4 = 2.5\nΔGDP = 2.5 × (-$10B) = -$25 billion.\n\n2. Transfers Multiplier = MPC / (1 - MPC) = 0.6 / 0.4 = 1.5\nΔGDP = 1.5 × (-$10B) = -$15 billion." },
  { id: 'p14', chapter: "Ch 26: Income and Expenditure", topic: "COMP 12: Aggregate Spending Equation", question: "Autonomous consumer spending = $250B\nPlanned investment (I_planned) = $350B\nMPC = 2/3\n\nCalculate planned aggregate spending (AE_planned) when Real GDP is $600B. Then find the equilibrium GDP (Y*).", solution: "1. AE_planned = C + I_planned\nAE_planned = 250 + (2/3)Y + 350 = 600 + (2/3)Y\nAt Y = 600: AE_planned = 600 + (2/3)(600) = $1,000B.\n\n2. Equilibrium Y* occurs when Y = AE_planned:\nY = 600 + (2/3)Y\n(1/3)Y = 600\nY* = $1,800B." },

  // COMP 14: Inflation Tax
  { id: 'p15', chapter: "Ch 31: Inflation & Deflation", topic: "COMP 14: Seigniorage & Inflation Tax", question: "Maria holds $1,000 in cash. Over the year, the inflation rate is 10%. \nCalculate the real inflation tax paid by Maria. \nIf the inflation rate was 25%, what would the tax be?", solution: "Real Inflation Tax = Inflation Rate × Real Money Holdings.\n\nAt 10% inflation:\n0.10 × $1,000 = $100.\n\nAt 25% inflation:\n0.25 × $1,000 = $250." },
  { id: 'p16', chapter: "Ch 31: Inflation & Deflation", topic: "COMP 14: Comparing Inflation Tax", question: "In India (2019), the Inflation Rate was 7.66% and the Money Supply was Rp 36,883 Billion.\n\nCalculate the Inflation Tax.", solution: "Inflation Tax = Inflation Rate × Money Supply\nInflation Tax = 0.0766 × 36,883 = Rp 2,825 Billion." },

  // COMP 16: Velocity
  { id: 'p17', chapter: "Ch 32: Events and Ideas", topic: "COMP 16: Velocity of Money", question: "In Egypt, Nominal GDP is 1,838 billion Egyptian pounds and M1 is 540 billion Egyptian pounds.\n\nCalculate the velocity of money.", solution: "Velocity Equation: M × V = P × Y (where P × Y is Nominal GDP).\n\nV = Nominal GDP / M\nV = 1,838 / 540 = 3.4" },
  { id: 'p18', chapter: "Ch 32: Events and Ideas", topic: "COMP 16: Velocity of Money 2", question: "In South Korea, Nominal GDP is 1,466,788 Billion Won and M1 is 734,412 Billion Won. Calculate Velocity.", solution: "V = Nominal GDP / M\nV = 1,466,788 / 734,412 = 2.0" },

  // COMP 17, 18, 19: Intl Macro
  { id: 'p19', chapter: "Ch 33: International Macroeconomics", topic: "COMP 17: Balance of Payments", question: "Scottopia has:\nExports of Goods = $400B, Exports of Services = $300B.\nImports of Goods = $500B, Imports of Services = $350B.\nForeigners purchase $250B of Scottopian assets.\n\nCalculate the Current Account (CA) and the Financial Account (FA).", solution: "1. Current Account (CA):\nCA = (400 + 300) - (500 + 350) = 700 - 850 = -$150B (Deficit)\n\n2. Financial Account (FA):\nSince CA + FA = 0, FA must be +$150B (Surplus).\n(Meaning Scottopians bought $100B in foreign assets to offset the $250B foreigners bought)." },
  { id: 'p20', chapter: "Ch 33: International Macroeconomics", topic: "COMP 17: Balance of Payments 2", question: "Popania purchases $300B of foreign assets. Foreigners purchase $400B of Popanian assets. Popania exports $350B of goods/services.\n\nCalculate the FA, CA, and the value of Imports.", solution: "1. Financial Account (FA) = Foreign purchases - Domestic purchases abroad\nFA = 400 - 300 = +$100B\n\n2. Current Account (CA) = -FA = -$100B\n\n3. CA = Exports - Imports\n-100 = 350 - Imports\nImports = $450B" },
  { id: 'p21', chapter: "Ch 33: International Macroeconomics", topic: "COMP 18: Real Exchange Rates", question: "The nominal exchange rate is 18.82 Mexican Pesos per 1 USD.\nThe US Price Index is 120 and the Mexican Price Index is 150.\n\nCalculate the Real Exchange Rate (Pesos per Dollar).", solution: "Real Exchange Rate = Nominal Exchange Rate × (Domestic Price Level / Foreign Price Level)\n*Assuming US is domestic, Mexico is foreign:\n\nReal Rate = 18.82 × (120 / 150) = 18.82 × 0.8 = 15.056 Pesos per USD." },
  { id: 'p22', chapter: "Ch 33: International Macroeconomics", topic: "COMP 19: Purchasing Power Parity", question: "A Big Mac costs $5.67 in the US and 50 Pesos in Mexico. The actual nominal exchange rate is 18.82 Pesos per Dollar.\n\nCalculate the Implied Purchasing Power Parity (PPP) exchange rate.", solution: "PPP is the exchange rate that equalizes the cost of the basket in both countries.\n\nImplied PPP = Price in MXN / Price in USD\nImplied PPP = 50 / 5.67 = 8.82 Pesos per USD.\n\n(Because 8.82 < 18.82, the Peso is currently undervalued compared to PPP)." }
];

// --- COMPONENTS ---

// Confetti Component for Celebrations
const Confetti = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {[...Array(60)].map((_, i) => (
        <div key={i} className="absolute w-2 h-2 rounded-sm animate-confetti"
             style={{
               left: `${Math.random() * 100}%`,
               top: `-10px`,
               backgroundColor: ['#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'][Math.floor(Math.random() * 5)],
               animationDelay: `${Math.random() * 2}s`,
               animationDuration: `${Math.random() * 2 + 2}s`
             }}>
        </div>
      ))}
      <style>{`
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-confetti { animation: confetti linear forwards; }
      `}</style>
    </div>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState('flashcards'); // 'flashcards', 'practice', 'test'
  const [selectedChapter, setSelectedChapter] = useState("All Chapters");
  const [showConfetti, setShowConfetti] = useState(false);

  // Progress Tracking State (Persisted in localStorage)
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem('macroProgress');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('macroProgress', JSON.stringify(progress));
  }, [progress]);

  const markProgress = (id, status) => {
    setProgress(prev => ({ ...prev, [id]: status }));
  };

  // Flashcard State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const filteredCards = useMemo(() => 
    selectedChapter === "All Chapters" ? flashcardsData : flashcardsData.filter(c => c.chapter === selectedChapter),
  [selectedChapter]);

  // Practice State
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const filteredPractice = useMemo(() => 
    selectedChapter === "All Chapters" ? practiceData : practiceData.filter(p => p.chapter.includes(selectedChapter)),
  [selectedChapter]);

  // Test Mode State
  const [testState, setTestState] = useState('idle'); // idle, running, results
  const [testQueue, setTestQueue] = useState([]);
  const [testScore, setTestScore] = useState({ correct: 0, total: 0 });

  // Reset indices when changing filters
  useEffect(() => {
    setCurrentIndex(0);
    setPracticeIndex(0);
    setIsFlipped(false);
    setShowSolution(false);
  }, [selectedChapter, activeTab]);

  const chapters = ["All Chapters", ...new Set(flashcardsData.map(card => card.chapter))];

  // Nav Handlers
  const handleNextCard = () => { setIsFlipped(false); setTimeout(() => setCurrentIndex((prev) => (prev + 1) % filteredCards.length), 150); };
  const handlePrevCard = () => { setIsFlipped(false); setTimeout(() => setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length), 150); };
  
  const handleNextPractice = () => { setShowSolution(false); setTimeout(() => setPracticeIndex((prev) => (prev + 1) % filteredPractice.length), 150); };
  const handlePrevPractice = () => { setShowSolution(false); setTimeout(() => setPracticeIndex((prev) => (prev - 1 + filteredPractice.length) % filteredPractice.length), 150); };

  // Calculate Mastery
  const calculateMastery = () => {
    let totalItems = filteredCards.length + filteredPractice.length;
    let masteredCount = 0;
    filteredCards.forEach(c => { if (progress[c.id] === 'mastered') masteredCount++; });
    filteredPractice.forEach(p => { if (progress[p.id] === 'mastered') masteredCount++; });
    return totalItems === 0 ? 0 : Math.round((masteredCount / totalItems) * 100);
  };

  // Trigger Confetti Effect
  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  // Test Mode Logic
  const startTest = () => {
    // Pick 5 random cards and 5 random practices (or max available)
    const shuffledCards = [...filteredCards].sort(() => 0.5 - Math.random()).slice(0, 5).map(c => ({...c, type: 'card'}));
    const shuffledPractice = [...filteredPractice].sort(() => 0.5 - Math.random()).slice(0, 5).map(p => ({...p, type: 'practice'}));
    const combined = [...shuffledCards, ...shuffledPractice].sort(() => 0.5 - Math.random());
    
    setTestQueue(combined);
    setCurrentIndex(0);
    setTestScore({ correct: 0, total: combined.length });
    setTestState('running');
    setIsFlipped(false);
  };

  const handleTestAnswer = (isCorrect) => {
    if (isCorrect) setTestScore(prev => ({ ...prev, correct: prev.correct + 1 }));
    
    if (currentIndex + 1 >= testQueue.length) {
      setTestState('results');
      if ((testScore.correct + (isCorrect ? 1 : 0)) / testQueue.length >= 0.8) {
        triggerConfetti(); // Confetti for > 80%
      }
    } else {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev + 1), 150);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      {showConfetti && <Confetti />}
      
      {/* Header & Navigation */}
      <header className="bg-blue-900 text-white shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-4 border-b border-blue-800">
          <div className="flex items-center gap-2">
            <BookOpen size={28} className="text-blue-300" />
            <h1 className="text-2xl font-bold tracking-tight">Macro Exam Prep</h1>
          </div>
          
          <div className="flex bg-blue-950 rounded-lg p-1 w-full md:w-auto overflow-x-auto">
            <button onClick={() => {setActiveTab('flashcards'); setTestState('idle');}} className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${activeTab === 'flashcards' ? 'bg-blue-600 text-white' : 'text-blue-300 hover:text-white hover:bg-blue-800'}`}>
              <BrainCircuit size={18} /> Concepts
            </button>
            <button onClick={() => {setActiveTab('practice'); setTestState('idle');}} className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${activeTab === 'practice' ? 'bg-blue-600 text-white' : 'text-blue-300 hover:text-white hover:bg-blue-800'}`}>
              <Calculator size={18} /> Practice Lab
            </button>
            <button onClick={() => setActiveTab('test')} className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${activeTab === 'test' ? 'bg-amber-600 text-white' : 'text-blue-300 hover:text-white hover:bg-blue-800'}`}>
              <GraduationCap size={18} /> Test Mode
            </button>
          </div>
        </div>

        {/* Filter and Progress Bar */}
        {activeTab !== 'test' && (
          <div className="bg-blue-800 py-3">
            <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
              <select 
                className="bg-blue-900 text-white border border-blue-600 rounded-md px-4 py-1.5 outline-none focus:ring-2 focus:ring-blue-400 font-medium text-sm w-full sm:w-auto"
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value)}
              >
                {chapters.map(chap => <option key={chap} value={chap}>{chap}</option>)}
              </select>
              
              <div className="flex items-center gap-3 w-full sm:w-1/2">
                <span className="text-sm font-medium text-blue-200 whitespace-nowrap">Mastery: {calculateMastery()}%</span>
                <div className="w-full bg-blue-950 rounded-full h-2.5">
                  <div className="bg-green-400 h-2.5 rounded-full transition-all duration-500" style={{ width: `${calculateMastery()}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-start p-4 max-w-4xl mx-auto w-full pt-8">
        
        {/* FLASHCARD MODE */}
        {activeTab === 'flashcards' && (
          <div className="w-full max-w-2xl flex flex-col animate-in fade-in duration-500">
            {filteredCards.length > 0 ? (
              <>
                <div className="mb-4 flex justify-between items-end px-2">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">{filteredCards[currentIndex].chapter}</span>
                  <span className="text-sm font-bold bg-blue-100 text-blue-800 py-1 px-4 rounded-full">Card {currentIndex + 1} of {filteredCards.length}</span>
                </div>

                <div className="w-full h-80 md:h-96 relative cursor-pointer [perspective:1000px] group" onClick={() => setIsFlipped(!isFlipped)}>
                  <div className={`w-full h-full transition-transform duration-500 [transform-style:preserve-3d] shadow-xl rounded-2xl relative ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                    {/* Front */}
                    <div className="absolute w-full h-full bg-white rounded-2xl p-8 flex flex-col items-center justify-center [backface-visibility:hidden] border-t-4 border-blue-500">
                      <span className="text-blue-500 font-bold mb-4 uppercase tracking-widest text-xs border border-blue-200 px-3 py-1 rounded-full">Question</span>
                      <h2 className="text-2xl md:text-3xl font-semibold text-center leading-relaxed">{filteredCards[currentIndex].question}</h2>
                      <p className="absolute bottom-6 text-slate-400 text-sm flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity font-medium"><RotateCcw size={14}/> Click to flip</p>
                    </div>
                    {/* Back */}
                    <div className="absolute w-full h-full bg-blue-50 rounded-2xl p-8 flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] border-t-4 border-green-500 overflow-y-auto">
                      <span className="text-green-600 font-bold mb-4 uppercase tracking-widest text-xs border border-green-200 px-3 py-1 rounded-full shrink-0">Answer</span>
                      <p className="text-lg md:text-xl text-center leading-relaxed whitespace-pre-line text-slate-700">{filteredCards[currentIndex].answer}</p>
                    </div>
                  </div>
                </div>

                {/* Progress & Nav Controls */}
                <div className="mt-8 flex flex-col items-center gap-4">
                  <div className="flex gap-4">
                     <button onClick={() => markProgress(filteredCards[currentIndex].id, 'review')} className={`px-4 py-2 rounded-lg text-sm font-bold border transition-colors ${progress[filteredCards[currentIndex].id] === 'review' ? 'bg-orange-100 text-orange-700 border-orange-300' : 'bg-white text-slate-500 hover:bg-slate-100'}`}>Needs Review</button>
                     <button onClick={() => { markProgress(filteredCards[currentIndex].id, 'mastered'); if(calculateMastery() >= 90) triggerConfetti(); }} className={`px-4 py-2 rounded-lg text-sm font-bold border transition-colors ${progress[filteredCards[currentIndex].id] === 'mastered' ? 'bg-green-100 text-green-700 border-green-300' : 'bg-white text-slate-500 hover:bg-slate-100'}`}>Mastered</button>
                  </div>
                  
                  <div className="flex items-center justify-center gap-6">
                    <button onClick={handlePrevCard} className="p-4 rounded-full bg-white shadow-md hover:bg-slate-100"><ChevronLeft size={28} /></button>
                    <button onClick={() => setIsFlipped(!isFlipped)} className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700">{isFlipped ? "Show Question" : "Show Answer"}</button>
                    <button onClick={handleNextCard} className="p-4 rounded-full bg-white shadow-md hover:bg-slate-100"><ChevronRight size={28} /></button>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center text-slate-500 p-10 bg-white rounded-2xl shadow-sm"><BookOpen size={48} className="mx-auto mb-4 text-slate-300" /><h2 className="text-xl font-medium">No cards found</h2></div>
            )}
          </div>
        )}

        {/* PRACTICE LAB MODE */}
        {activeTab === 'practice' && (
          <div className="w-full max-w-3xl flex flex-col animate-in fade-in duration-500">
            {filteredPractice.length > 0 ? (
              <>
                <div className="mb-4 flex justify-between items-end px-2">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">Exam Computation</span>
                    <span className="text-sm font-semibold text-slate-700">{filteredPractice[practiceIndex].topic}</span>
                  </div>
                  <span className="text-sm font-bold bg-indigo-100 text-indigo-800 py-1 px-4 rounded-full shadow-sm border border-indigo-200">
                    Task {practiceIndex + 1} of {filteredPractice.length}
                  </span>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                  <div className="p-6 md:p-8 border-b border-slate-100">
                    <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2"><Calculator size={20} className="text-indigo-500"/> The Problem</h3>
                    <p className="text-xl leading-relaxed whitespace-pre-line text-slate-800 font-medium">{filteredPractice[practiceIndex].question}</p>
                  </div>

                  <div className={`p-6 md:p-8 transition-colors duration-500 ${showSolution ? 'bg-indigo-50/50' : 'bg-slate-50'}`}>
                    {!showSolution ? (
                      <div className="flex flex-col items-center justify-center py-6">
                        <p className="text-slate-500 mb-6 text-center">Work out the math on paper, then check your steps.</p>
                        <button onClick={() => setShowSolution(true)} className="px-8 py-3 rounded-full bg-indigo-600 text-white font-bold shadow-md hover:bg-indigo-700 flex items-center gap-2">
                          <CheckCircle2 size={20} /> Reveal Step-by-Step Solution
                        </button>
                      </div>
                    ) : (
                      <div className="animate-in fade-in duration-500">
                        <h3 className="text-lg font-bold text-indigo-600 uppercase tracking-widest mb-4 flex items-center gap-2"><CheckCircle2 size={20} /> The Solution</h3>
                        <p className="text-lg leading-relaxed whitespace-pre-line text-slate-700 font-mono bg-white p-6 rounded-xl border border-indigo-100 shadow-sm">{filteredPractice[practiceIndex].solution}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress & Nav Controls */}
                <div className="mt-8 flex flex-col items-center gap-4">
                  <div className="flex gap-4">
                     <button onClick={() => markProgress(filteredPractice[practiceIndex].id, 'review')} className={`px-4 py-2 rounded-lg text-sm font-bold border transition-colors ${progress[filteredPractice[practiceIndex].id] === 'review' ? 'bg-orange-100 text-orange-700 border-orange-300' : 'bg-white text-slate-500 hover:bg-slate-100'}`}>Needs Review</button>
                     <button onClick={() => { markProgress(filteredPractice[practiceIndex].id, 'mastered'); if(calculateMastery() >= 90) triggerConfetti(); }} className={`px-4 py-2 rounded-lg text-sm font-bold border transition-colors ${progress[filteredPractice[practiceIndex].id] === 'mastered' ? 'bg-green-100 text-green-700 border-green-300' : 'bg-white text-slate-500 hover:bg-slate-100'}`}>Mastered</button>
                  </div>
                  <div className="flex items-center justify-center gap-6">
                    <button onClick={handlePrevPractice} className="p-4 rounded-full bg-white shadow-md hover:bg-slate-100 text-slate-600 hover:text-indigo-600"><ChevronLeft size={28} /></button>
                    <button onClick={handleNextPractice} className="p-4 rounded-full bg-white shadow-md hover:bg-slate-100 text-slate-600 hover:text-indigo-600"><ChevronRight size={28} /></button>
                  </div>
                </div>
              </>
             ) : (
              <div className="text-center text-slate-500 p-10 bg-white rounded-2xl shadow-sm"><Calculator size={48} className="mx-auto mb-4 text-slate-300" /><h2 className="text-xl font-medium">No practice tasks found</h2></div>
            )}
          </div>
        )}

        {/* TEST MODE */}
        {activeTab === 'test' && (
          <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-500">
            {testState === 'idle' && (
              <div className="bg-white p-10 rounded-2xl shadow-lg text-center w-full border-t-4 border-amber-500">
                <Trophy size={64} className="mx-auto text-amber-500 mb-6" />
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Exam Simulator</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">This mode pulls a random mix of 10 theory flashcards and computation problems from your current filter. <br/>Challenge yourself under exam conditions!</p>
                
                <div className="bg-amber-50 p-4 rounded-lg mb-8 text-amber-800 font-medium">
                  Current Scope: {selectedChapter}
                </div>

                <button onClick={startTest} className="px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold shadow-md hover:shadow-lg transition-all text-lg flex items-center gap-2 mx-auto">
                  Start the Test
                </button>
              </div>
            )}

            {testState === 'running' && testQueue.length > 0 && (
              <div className="w-full">
                <div className="mb-6 w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                    {testQueue[currentIndex].type === 'card' ? 'Theory Concept' : 'Computation'}
                  </span>
                  <span className="text-sm font-bold bg-amber-100 text-amber-800 py-1 px-4 rounded-full">
                    Question {currentIndex + 1} of {testQueue.length}
                  </span>
                </div>

                <div className="w-full min-h-[24rem] relative mb-8">
                  <div className={`w-full h-full bg-white shadow-xl rounded-2xl p-8 flex flex-col border-t-4 ${testQueue[currentIndex].type === 'card' ? 'border-blue-500' : 'border-indigo-500'}`}>
                    
                    <h2 className="text-2xl font-semibold leading-relaxed mb-6">
                      {testQueue[currentIndex].question}
                    </h2>

                    {!isFlipped ? (
                      <div className="mt-auto flex justify-center">
                        <button onClick={() => setIsFlipped(true)} className="px-8 py-3 rounded-full bg-slate-800 text-white font-semibold shadow-md hover:bg-slate-900 transition-all">
                          Reveal Answer
                        </button>
                      </div>
                    ) : (
                      <div className="mt-6 border-t pt-6 animate-in slide-in-from-top-4 duration-300">
                         <span className="text-green-600 font-bold mb-4 uppercase tracking-widest text-xs">Correct Answer:</span>
                         <p className="text-lg whitespace-pre-line text-slate-700 font-mono bg-slate-50 p-4 rounded-lg mt-2">
                           {testQueue[currentIndex].answer || testQueue[currentIndex].solution}
                         </p>

                         <div className="mt-8 flex flex-col gap-3">
                           <p className="text-center font-bold text-slate-500">Did you get it right?</p>
                           <div className="flex justify-center gap-4">
                             <button onClick={() => handleTestAnswer(false)} className="px-6 py-3 rounded-xl border-2 border-red-200 text-red-600 hover:bg-red-50 font-bold flex items-center gap-2"><XCircle size={20}/> No</button>
                             <button onClick={() => handleTestAnswer(true)} className="px-6 py-3 rounded-xl border-2 border-green-200 text-green-600 hover:bg-green-50 font-bold flex items-center gap-2"><CheckCircle2 size={20}/> Yes</button>
                           </div>
                         </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {testState === 'results' && (
              <div className="bg-white p-10 rounded-2xl shadow-lg text-center w-full border-t-4 border-green-500 animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-black text-green-600">{Math.round((testScore.correct / testScore.total) * 100)}%</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Test Complete!</h2>
                <p className="text-slate-600 mb-8 text-lg">You scored {testScore.correct} out of {testScore.total}.</p>
                
                <button onClick={() => setTestState('idle')} className="px-8 py-3 rounded-full bg-slate-800 hover:bg-slate-900 text-white font-bold shadow-md transition-all flex items-center gap-2 mx-auto">
                  <RefreshCw size={20} /> Take Another Test
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}