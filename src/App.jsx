import React, { useState, useEffect, useMemo, useRef } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen, Calculator, BrainCircuit, CheckCircle2, XCircle, GraduationCap, Trophy, RefreshCw, BookText, Filter, Moon, Sun, BarChart3, AlertTriangle, Timer, Clock, Info, ChevronDown, PlayCircle } from 'lucide-react';

// --------------------------------------------------------------------------
// 100% MATHEMATICALLY ACCURATE MACROECONOMIC SVG GRAPHICS
// --------------------------------------------------------------------------

const ChartBusinessCycle = () => (
  <div className="w-full max-w-md mx-auto my-6 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
    <h4 className="text-center font-extrabold text-slate-800 mb-6 text-lg">The Business Cycle</h4>
    <svg viewBox="0 0 400 240" className="w-full h-auto overflow-visible">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
        </marker>
      </defs>
      <line x1="40" y1="200" x2="380" y2="200" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)"/>
      <line x1="40" y1="200" x2="40" y2="30" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)"/>
      <text x="40" y="15" className="text-[12px] fill-slate-600 font-bold">Real GDP</text>
      <text x="350" y="225" className="text-[12px] fill-slate-600 font-bold">Time</text>
      <line x1="40" y1="180" x2="360" y2="60" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5"/>
      <text x="260" y="50" className="text-[11px] fill-slate-500 font-bold">Trend (Potential)</text>
      <path d="M 40 180 C 60 100, 80 40, 120 70 C 160 100, 180 200, 220 180 C 260 160, 300 20, 360 50" fill="transparent" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="100" cy="62" r="5" fill="#ef4444" stroke="#fff" strokeWidth="2" />
      <text x="85" y="45" className="text-[12px] font-bold fill-red-600">Peak</text>
      <circle cx="218" cy="180" r="5" fill="#10b981" stroke="#fff" strokeWidth="2" />
      <text x="200" y="200" className="text-[12px] font-bold fill-emerald-600">Trough</text>
      <text x="135" y="130" className="text-[11px] font-bold fill-rose-500 bg-white">Recession</text>
      <text x="245" y="120" className="text-[11px] font-bold fill-emerald-600 bg-white">Expansion</text>
    </svg>
    <p className="text-sm text-center text-slate-600 mt-6 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">Actual GDP fluctuates around the long-term trend, creating output gaps.</p>
  </div>
);

const ChartProductionFunction = () => (
  <div className="w-full max-w-md mx-auto my-6 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
    <h4 className="text-center font-extrabold text-slate-800 mb-6 text-lg">Aggregate Production Function</h4>
    <svg viewBox="0 0 400 240" className="w-full h-auto overflow-visible">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
        </marker>
      </defs>
      <line x1="40" y1="200" x2="380" y2="200" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)"/>
      <line x1="40" y1="200" x2="40" y2="30" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)"/>
      <text x="40" y="15" className="text-[12px] fill-slate-600 font-bold">Real GDP per Worker</text>
      <text x="210" y="225" className="text-[12px] fill-slate-600 font-bold">Physical Capital per Worker</text>
      <path d="M 40 200 Q 120 60 360 50" fill="transparent" stroke="#10b981" strokeWidth="3" strokeLinecap="round"/>
      <line x1="120" y1="200" x2="120" y2="123" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,4"/>
      <line x1="40" y1="123" x2="120" y2="123" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,4"/>
      <circle cx="120" cy="123" r="5" fill="#3b82f6" stroke="#fff" strokeWidth="2"/>
      <text x="110" y="113" className="text-[13px] font-black fill-slate-800">A</text>
      <line x1="260" y1="200" x2="260" y2="73" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,4"/>
      <line x1="40" y1="73" x2="260" y2="73" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,4"/>
      <circle cx="260" cy="73" r="5" fill="#3b82f6" stroke="#fff" strokeWidth="2"/>
      <text x="250" y="63" className="text-[13px] font-black fill-slate-800">B</text>
      <text x="140" y="85" className="text-[11px] font-bold fill-emerald-600">Diminishing Returns</text>
      <path d="M 120 205 L 120 210 L 260 210 L 260 205" fill="none" stroke="#64748b" strokeWidth="1.5"/>
      <text x="165" y="225" className="text-[10px] font-bold fill-slate-600">+ Capital</text>
      <path d="M 35 123 L 30 123 L 30 73 L 35 73" fill="none" stroke="#64748b" strokeWidth="1.5"/>
      <text x="5" y="102" className="text-[10px] font-bold fill-slate-600">+ Output</text>
    </svg>
    <p className="text-sm text-center text-slate-600 mt-6 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">Adding equal increments of physical capital leads to smaller and smaller increases in output.</p>
  </div>
);

const ChartADAS = () => (
  <div className="w-full max-w-md mx-auto my-6 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
    <h4 className="text-center font-extrabold text-slate-800 mb-6 text-lg">The AD-AS Model</h4>
    <svg viewBox="0 0 400 240" className="w-full h-auto overflow-visible">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
        </marker>
      </defs>
      <line x1="40" y1="200" x2="380" y2="200" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)"/>
      <line x1="40" y1="200" x2="40" y2="30" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)"/>
      <text x="40" y="15" className="text-[12px] fill-slate-600 font-bold">Aggregate Price Level</text>
      <text x="310" y="225" className="text-[12px] fill-slate-600 font-bold">Real GDP</text>
      <line x1="200" y1="40" x2="200" y2="200" stroke="#f59e0b" strokeWidth="3"/>
      <text x="185" y="30" className="text-[12px] font-bold fill-amber-600">LRAS</text>
      <text x="195" y="215" className="text-[11px] font-bold fill-amber-600">Yp</text>
      <line x1="80" y1="180" x2="320" y2="60" stroke="#ef4444" strokeWidth="3"/>
      <text x="325" y="55" className="text-[12px] font-bold fill-red-500">SRAS</text>
      <line x1="80" y1="60" x2="320" y2="180" stroke="#3b82f6" strokeWidth="3"/>
      <text x="325" y="185" className="text-[12px] font-bold fill-blue-600">AD</text>
      <line x1="40" y1="120" x2="200" y2="120" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,4"/>
      <circle cx="200" cy="120" r="5" fill="#1e293b" stroke="#fff" strokeWidth="2"/>
      <text x="180" y="110" className="text-[13px] font-black fill-slate-800">E</text>
      <text x="20" y="125" className="text-[11px] font-bold fill-slate-700">P*</text>
    </svg>
    <p className="text-sm text-center text-slate-600 mt-6 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">Long-run equilibrium occurs where AD, SRAS, and LRAS mathematically intersect at one point.</p>
  </div>
);

const ChartADShift = () => (
  <div className="w-full max-w-md mx-auto my-6 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
    <h4 className="text-center font-extrabold text-slate-800 mb-6 text-lg">Closing a Recessionary Gap</h4>
    <svg viewBox="0 0 400 240" className="w-full h-auto overflow-visible">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
        </marker>
        <marker id="shiftArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
        </marker>
      </defs>
      <line x1="40" y1="200" x2="380" y2="200" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)"/>
      <line x1="40" y1="200" x2="40" y2="30" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)"/>
      <text x="40" y="15" className="text-[12px] fill-slate-600 font-bold">Aggregate Price Level (P)</text>
      <text x="310" y="225" className="text-[12px] fill-slate-600 font-bold">Real GDP (Y)</text>
      <line x1="260" y1="40" x2="260" y2="200" stroke="#f59e0b" strokeWidth="3"/>
      <text x="245" y="30" className="text-[12px] font-bold fill-amber-600">LRAS</text>
      <line x1="80" y1="180" x2="320" y2="60" stroke="#ef4444" strokeWidth="3"/>
      <text x="325" y="55" className="text-[12px] font-bold fill-red-500">SRAS</text>
      <line x1="80" y1="80" x2="280" y2="180" stroke="#93c5fd" strokeWidth="3"/>
      <text x="285" y="190" className="text-[12px] font-bold fill-blue-400">AD1</text>
      <line x1="160" y1="40" x2="360" y2="140" stroke="#3b82f6" strokeWidth="3"/>
      <text x="365" y="150" className="text-[12px] font-bold fill-blue-600">AD2</text>
      <line x1="160" y1="120" x2="220" y2="120" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#shiftArrow)"/>
      <line x1="180" y1="200" x2="180" y2="130" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,4"/>
      <circle cx="180" cy="130" r="5" fill="#1e293b" stroke="#fff" strokeWidth="2"/>
      <text x="165" y="120" className="text-[12px] font-black fill-slate-700">E1</text>
      <line x1="260" y1="200" x2="260" y2="90" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,4"/>
      <circle cx="260" cy="90" r="5" fill="#1e293b" stroke="#fff" strokeWidth="2"/>
      <text x="245" y="80" className="text-[12px] font-black fill-slate-700">E2</text>
    </svg>
    <p className="text-sm text-center text-slate-600 mt-6 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">Expansionary Fiscal Policy shifts AD to the right, landing exactly on Potential Output (LRAS).</p>
  </div>
);

const ChartMoneyMarket = () => (
  <div className="w-full max-w-md mx-auto my-6 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
    <h4 className="text-center font-extrabold text-slate-800 mb-6 text-lg">The Money Market</h4>
    <svg viewBox="0 0 400 240" className="w-full h-auto overflow-visible">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
        </marker>
      </defs>
      <line x1="40" y1="200" x2="380" y2="200" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)"/>
      <line x1="40" y1="200" x2="40" y2="30" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)"/>
      <text x="40" y="15" className="text-[12px] fill-slate-600 font-bold">Interest Rate (r)</text>
      <text x="260" y="225" className="text-[12px] fill-slate-600 font-bold">Quantity of Money</text>
      <line x1="200" y1="40" x2="200" y2="200" stroke="#f59e0b" strokeWidth="4"/>
      <text x="185" y="30" className="text-[12px] font-bold fill-amber-600">MS</text>
      <line x1="80" y1="60" x2="320" y2="180" stroke="#3b82f6" strokeWidth="3"/>
      <text x="325" y="185" className="text-[12px] font-bold fill-blue-600">MD</text>
      <line x1="40" y1="120" x2="200" y2="120" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,4"/>
      <circle cx="200" cy="120" r="6" fill="#1e293b" stroke="#fff" strokeWidth="2"/>
      <text x="20" y="125" className="text-[12px] font-bold fill-slate-700">r*</text>
    </svg>
    <p className="text-sm text-center text-slate-600 mt-6 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">The Fed sets a vertical Money Supply (MS), determining the equilibrium interest rate.</p>
  </div>
);

const ChartPhillipsCurve = () => (
  <div className="w-full max-w-md mx-auto my-6 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
    <h4 className="text-center font-extrabold text-slate-800 mb-6 text-lg">The Phillips Curve</h4>
    <svg viewBox="0 0 400 240" className="w-full h-auto overflow-visible">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
        </marker>
      </defs>
      <line x1="40" y1="200" x2="380" y2="200" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)"/>
      <line x1="40" y1="200" x2="40" y2="30" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)"/>
      <text x="40" y="15" className="text-[12px] fill-slate-600 font-bold">Inflation Rate</text>
      <text x="250" y="225" className="text-[12px] fill-slate-600 font-bold">Unemployment Rate</text>
      <line x1="200" y1="40" x2="200" y2="200" stroke="#f59e0b" strokeWidth="3"/>
      <text x="185" y="30" className="text-[12px] font-bold fill-amber-600">LRPC</text>
      <text x="185" y="215" className="text-[11px] font-bold fill-amber-600">NAIRU</text>
      <line x1="80" y1="40" x2="320" y2="160" stroke="#ef4444" strokeWidth="3"/>
      <text x="325" y="160" className="text-[12px] font-bold fill-red-500">SRPC</text>
      <line x1="40" y1="100" x2="200" y2="100" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,4"/>
      <circle cx="200" cy="100" r="6" fill="#1e293b" stroke="#fff" strokeWidth="2"/>
      <text x="215" y="95" className="text-[11px] font-bold fill-slate-700 bg-white">Expected = Actual</text>
    </svg>
    <p className="text-sm text-center text-slate-600 mt-6 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">The short-run trade-off between inflation and unemployment vanishes in the long-run at the NAIRU.</p>
  </div>
);

const renderChapterGraphic = (chapterTitle) => {
  if (chapterTitle.includes("Ch 21")) return <ChartBusinessCycle />;
  if (chapterTitle.includes("Ch 24")) return <ChartProductionFunction />;
  if (chapterTitle.includes("Ch 27")) return <ChartADAS />;
  if (chapterTitle.includes("Ch 28")) return <ChartADShift />;
  if (chapterTitle.includes("Ch 30")) return <ChartMoneyMarket />;
  if (chapterTitle.includes("Ch 31")) return <ChartPhillipsCurve />;
  return null;
};

const renderGraphic = (graphicId) => {
  switch(graphicId) {
    case 'BusinessCycle': return <ChartBusinessCycle />;
    case 'ProductionFunction': return <ChartProductionFunction />;
    case 'ADAS': return <ChartADAS />;
    case 'ADShift': return <ChartADShift />;
    case 'MoneyMarket': return <ChartMoneyMarket />;
    case 'PhillipsCurve': return <ChartPhillipsCurve />;
    default: return null;
  }
};

// --------------------------------------------------------------------------
// DATA
// --------------------------------------------------------------------------

const flashcardsData = [
  { id: 'f1', chapter: "Ch 21: The Big Picture", graphic: "BusinessCycle", question: "What is the Business Cycle?", answer: "The short-run alternation between economic downturns (recessions/contractions) and economic upturns (expansions/recoveries). Peaks and troughs mark the turning points." },
  { id: 'f2', chapter: "Ch 21: The Big Picture", question: "What is the Paradox of Thrift?", answer: "When families/businesses worry about economic hard times, they cut spending. This reduction in spending depresses the economy, potentially leaving them worse off than if they hadn't tried to act responsibly." },
  { id: 'f3', chapter: "Ch 22: GDP and CPI", question: "What is included in GDP?", answer: "Only domestically produced FINAL goods and services. It excludes intermediate goods, used goods, financial assets (stocks/bonds), and goods produced outside the country." },
  { id: 'f4', chapter: "Ch 22: GDP and CPI", question: "What is the difference between Nominal and Real GDP?", answer: "Nominal GDP calculates the value of goods using current year prices.\nReal GDP calculates the value of goods using the prices of a selected base year (adjusting for inflation)." },
  { id: 'f5', chapter: "Ch 23: Unemployment and Inflation", question: "What are the three types of unemployment?", answer: "1. Frictional: Time spent in job search.\n2. Structural: More job seekers than jobs available at the current wage (caused by min wage, unions, efficiency wages).\n3. Cyclical: Deviation from the natural rate due to the business cycle.\n\nNatural Rate = Frictional + Structural" },
  { id: 'f6', chapter: "Ch 23: Unemployment and Inflation", question: "What are Shoe-leather and Menu costs of inflation?", answer: "Shoe-leather costs: Increased costs of transactions (wasting time running to the bank to avoid holding depreciating cash).\n\nMenu costs: The real cost of physically changing listed prices." },
  { id: 'f7', chapter: "Ch 24: Long-Run Economic Growth", graphic: "ProductionFunction", question: "What drives long-run productivity growth?", answer: "1. Physical capital (machines, buildings)\n2. Human capital (education, knowledge)\n3. Technological progress (Total Factor Productivity / TFP)." },
  { id: 'f8', chapter: "Ch 24: Long-Run Economic Growth", question: "What is the Convergence Hypothesis?", answer: "Differences in real GDP per capita among countries tend to narrow over time, as poorer countries grow faster than richer ones to catch up." },
  { id: 'f9', chapter: "Ch 25: Savings & Financial System", question: "What are the three main tasks of a financial system?", answer: "1. Reducing transaction costs\n2. Reducing financial risk (via diversification)\n3. Providing liquidity" },
  { id: 'f10', chapter: "Ch 25: Savings & Financial System", question: "What is the Fisher Effect?", answer: "An increase in expected future inflation drives up the nominal interest rate exactly, leaving the expected real interest rate unchanged." },
  { id: 'f11', chapter: "Ch 26: Income and Expenditure", question: "What is Unplanned Inventory Investment?", answer: "Unplanned changes in inventories that occur when actual sales are more or less than businesses expected. It acts as a leading economic indicator. (When positive, GDP falls; when negative, GDP rises)." },
  { id: 'f12', chapter: "Ch 27: AD and AS", graphic: "ADAS", question: "Why does the Aggregate Demand (AD) curve slope downward?", answer: "1. The Wealth Effect: Higher price level reduces purchasing power of wealth, reducing consumption.\n2. The Interest Rate Effect: Higher price level increases money demand, raising interest rates, which reduces investment." },
  { id: 'f13', chapter: "Ch 27: AD and AS", graphic: "ADAS", question: "What causes shifts in the SRAS vs. LRAS curves?", answer: "SRAS shifts due to changes in commodity prices, nominal wages, or productivity.\n\nLRAS represents potential output if all prices/wages were fully flexible. It shifts due to changes in resources (Capital, Labor) or Technology (TFP)." },
  { id: 'f14', chapter: "Ch 28: Fiscal Policy", graphic: "ADShift", question: "What is Expansionary vs. Contractionary Fiscal Policy?", answer: "Expansionary (shifts AD right): Increase gov purchases, cut taxes, increase gov transfers.\n\nContractionary (shifts AD left): Decrease gov purchases, raise taxes, decrease gov transfers." },
  { id: 'f15', chapter: "Ch 28: Fiscal Policy", question: "What are Automatic Stabilizers?", answer: "Government spending and taxation rules that automatically become expansionary in recessions and contractionary in expansions (e.g., progressive income taxes, unemployment insurance) without deliberate policy action." },
  { id: 'f16', chapter: "Ch 29: Money, Banking, & Fed", question: "What are the roles and types of money?", answer: "Roles: Medium of exchange, Store of value, Unit of account.\n\nTypes: Commodity money (gold), Commodity-backed money, and Fiat money (value derives entirely from official government status)." },
  { id: 'f17', chapter: "Ch 29: Money, Banking, & Fed", graphic: "MoneyMarket", question: "What are the Fed's primary tools?", answer: "1. Open-market operations (buying T-bills increases money supply/reserves; selling decreases it).\n2. Discount window lending.\n3. Reserve requirements." },
  { id: 'f18', chapter: "Ch 30: Monetary Policy", graphic: "MoneyMarket", question: "What shifts the Money Demand curve?", answer: "1. Changes in aggregate price level\n2. Changes in real GDP\n3. Changes in technology (e.g., credit cards)\n4. Changes in institutions" },
  { id: 'f19', chapter: "Ch 30: Monetary Policy", question: "What is Monetary Neutrality?", answer: "The concept that in the long run, changes in the money supply affect the aggregate price level proportionately, but do not affect real GDP or the interest rate." },
  { id: 'f20', chapter: "Ch 31: Inflation & Deflation", graphic: "PhillipsCurve", question: "What is the NAIRU?", answer: "Non-Accelerating Inflation Rate of Unemployment: The unemployment rate at which inflation does not change over time. It represents the Long-Run Phillips Curve (which is vertical)." },
  { id: 'f21', chapter: "Ch 31: Inflation & Deflation", question: "What is Debt Deflation?", answer: "The reduction in aggregate demand arising from the increase in the real burden of outstanding debt caused by deflation. (Borrowers lose, cutting spending; lenders gain but don't increase spending)." },
  { id: 'f22', chapter: "Ch 32: Events and Ideas", question: "What was Keynes's core argument?", answer: "Economic slumps are caused by inadequate spending. He proved the short-run matters, arguing for macroeconomic policy activism (fiscal and monetary) to smooth the business cycle." },
  { id: 'f23', chapter: "Ch 33: International Macroeconomics", question: "What is the 'Impossible Trinity' (Trilemma)?", answer: "A country cannot simultaneously have: \n1. Free movement of capital\n2. An independent monetary policy\n3. A fixed exchange rate." }
];

const practiceData = [
  { id: 'p1', chapter: "Ch 25: Savings & Financial System", topic: "COMP 1 & 9: Closed Economy Savings Identity", question: "In a closed economy: GDP = $1,000M, Consumer Spending (C) = $850M, Taxes (T) = $50M, Government Purchases (G) = $100M. \n\nCalculate Investment Spending (I), Private Savings, and the Budget Balance.", solution: "1. Investment Spending (I) = GDP - C - G = 1,000 - 850 - 100 = $50M\n2. Private Savings = GDP - T - C = 1,000 - 50 - 850 = $100M\n3. Budget Balance = T - G = 50 - 100 = -$50M (Deficit)\n(National Savings = Private + Budget = 100 - 50 = $50M = I)" },
  { id: 'p2', chapter: "Ch 25: Savings & Financial System", topic: "COMP 1 & 9: Open Economy Savings Identity", question: "In an open economy:\nExports (X) = $125M\nImports (IM) = $80M\nBudget Balance = -$200M (Deficit)\nInvestment Spending (I) = $350M\n\nCalculate Private Savings.", solution: "Identity: I = Private Savings + Budget Balance + Net Capital Inflow (IM - X)\n\n350 = Private Savings + (-200) + (80 - 125)\n350 = Private Savings - 200 - 45\n350 = Private Savings - 245\n\nPrivate Savings = 350 + 245 = $595M" },
  { id: 'p3', chapter: "Ch 25: Savings & Financial System", topic: "COMP 9: Capital Inflow / Outflow", question: "Capsland has Investment Spending = 20% of GDP, Private Savings = 10% of GDP, and Net Capital Inflow = 5% of GDP.\n\nCalculate the Budget Balance as a % of GDP.", solution: "I = Private Savings + Budget Balance + Net Capital Inflow\n20% = 10% + Budget Balance + 5%\n20% = 15% + Budget Balance\nBudget Balance = 5% (Surplus)" },
  { id: 'p4', chapter: "Ch 22: GDP and CPI", topic: "COMP 2: Value Add vs Final Sales vs Factor Income", question: "A bread company sells $50 of bread to a pizza company (Wages = 15). \nA cheese company sells $35 of cheese to the pizza company (Wages = 20). \nThe pizza company sells $200 of pizza to consumers (Wages = 75).\n\nCalculate GDP using all three methods.", solution: "(A) Value-Added:\nBread: $50, Cheese: $35, Pizza: $200 - $50 - $35 = $115. Total = $200\n\n(B) Final Goods:\nOnly pizza is sold to final consumers = $200\n\n(C) Factor Income (Wages + Profits):\nBread: W=15, Profit=(50-15)=35\nCheese: W=20, Profit=(35-20)=15\nPizza: W=75, Profit=(200-85-75)=40\nTotal GDP = (15+35) + (20+15) + (75+40) = $200" },
  { id: 'p5', chapter: "Ch 22: GDP and CPI", topic: "COMP 3: Nominal vs Real GDP & Deflator", question: "In 2013, Nominal GDP is $16,785B and Real GDP is $16,495B.\nIn 2014, Nominal GDP is $17,527B and Real GDP is $16,912B.\n\nCalculate the GDP Deflator for both years and the resulting Inflation Rate.", solution: "1. Deflator 2013: (16,785 / 16,495) × 100 = 101.8\n2. Deflator 2014: (17,527 / 16,912) × 100 = 103.6\n3. Inflation Rate: [(103.6 - 101.8) / 101.8] × 100 = 1.8%" },
  { id: 'p6', chapter: "Ch 22: GDP and CPI", topic: "COMP 4: Price Index & Inflation", question: "A pre-frost market basket costs $95.00.\nAfter the frost, the exact same market basket costs $175.00.\n\nAssuming the pre-frost period is the base year (Index = 100), calculate the post-frost Price Index and the Inflation Rate.", solution: "1. Price Index: ($175.00 / $95.00) × 100 = 184.2\n2. Inflation Rate: [(184.2 - 100) / 100] × 100 = 84.2%" },
  { id: 'p7', chapter: "Ch 23: Unemployment and Inflation", topic: "COMP 5: Employment Aggregates", question: "In the South region, the Labor Force is 60,909k and the number of Unemployed is 2,074k. The total adult population is 100,000k.\n\nCalculate the Number of Employed, the Unemployment Rate, and the LF Participation Rate.", solution: "1. Employed: 60,909k - 2,074k = 58,835k\n2. Unemployment Rate: (2,074 / 60,909) × 100 = 3.4%\n3. LF Participation Rate: (60,909 / 100,000) × 100 = 60.9%" },
  { id: 'p8', chapter: "Ch 25: Savings & Financial System", topic: "COMP 6: Inflation Winners and Losers", question: "Lynn lends Boris $10,000 at a nominal interest rate of 8%. Both expect 5% inflation (a 3% real interest rate).\n\nIf actual inflation is 4%, calculate the actual real interest rate. Who is the winner?", solution: "Actual Real Interest Rate = Nominal Rate - Actual Inflation = 8% - 4% = 4%\n\nBecause the real interest rate (4%) is higher than expected (3%), the lender (Lynn) WINS. She receives a higher real return than expected." },
  { id: 'p9', chapter: "Ch 31: Inflation & Deflation", topic: "COMP 6: Debt Deflation (Losers)", question: "The Miller family takes a mortgage of $100,000 to buy a house worth $105,000. During the first year, prices unexpectedly fall by 10% (Deflation).\n\nWho are the winners and losers?", solution: "The value of the house falls to $94,500. They still owe $100,000.\nThe Millers (Borrowers) LOSE because the real burden of their debt increased, and their asset is underwater.\nThe Mortgage Company (Lender) theoretically WINS (money repaid is worth more), but risks default if the Millers walk away." },
  { id: 'p10', chapter: "Ch 24: Long-Run Economic Growth", topic: "COMP 7: Rule of 70", question: "High-income countries have an average annual growth rate of 1.0%.\nMiddle-income countries grow at 3.6%.\n\nCalculate the number of years it will take each group to double their per capita GDP.", solution: "High-income: 70 / 1.0 = 70 years to double.\nMiddle-income: 70 / 3.6 = 19.4 years to double." },
  { id: 'p11', chapter: "Ch 24: Long-Run Economic Growth", topic: "COMP 8: Potential GDP & Production Function", question: "Using Y = T × K^α.\nAt Point A: Real GDP (Y) is 30,000 and Physical Capital (K) is 20,000.\nAt Point B: Real GDP (Y) is 50,000 and Physical Capital (K) is 40,000.\n\nCalculate the coefficient α.", solution: "α = ln(Y2/Y1) / ln(K2/K1)\nY2/Y1 = 50,000 / 30,000 = 5/3\nK2/K1 = 40,000 / 20,000 = 2\n\nα = ln(5/3) / ln(2) = 0.5108 / 0.6931 = 0.736" },
  { id: 'p12', chapter: "Ch 26: Income and Expenditure", topic: "COMP 10: Consumption Function Parameters", question: "At a disposable income of $20,000, consumer spending is $15,000.\nAt $40,000 disposable income, spending is $29,000.\n\nCalculate the MPC, the autonomous consumer spending (a), and write the consumption function.", solution: "1. MPC = (29,000 - 15,000) / (40,000 - 20,000) = 14,000 / 20,000 = 0.7\n2. Autonomous Spending (a) = 15,000 - (0.7 × 20,000) = 1,000\n3. Function: c = 1000 + 0.7yd" },
  { id: 'p13', chapter: "Ch 28: Fiscal Policy", topic: "COMP 11: Multiplier (Purchases vs Transfers)", question: "The MPC is 0.6. \nCalculate the total change in Real GDP if:\n1. The government reduces purchases (G) by $10 billion.\n2. The government reduces transfers (TR) by $10 billion.", solution: "1. Gov Purchases Multiplier = 1 / (1 - MPC) = 1 / 0.4 = 2.5\nΔGDP = 2.5 × (-$10B) = -$25 billion.\n\n2. Transfers Multiplier = MPC / (1 - MPC) = 0.6 / 0.4 = 1.5\nΔGDP = 1.5 × (-$10B) = -$15 billion." },
  { id: 'p14', chapter: "Ch 26: Income and Expenditure", topic: "COMP 12: Aggregate Spending Equation", question: "Autonomous consumer spending = $250B\nPlanned investment (I_planned) = $350B\nMPC = 2/3\n\nCalculate planned aggregate spending (AE_planned) when Real GDP is $600B. Then find the equilibrium GDP (Y*).", solution: "1. AE_planned = C + I_planned\nAE_planned = 250 + (2/3)Y + 350 = 600 + (2/3)Y\nAt Y = 600: AE_planned = 600 + (2/3)(600) = $1,000B.\n\n2. Equilibrium Y* occurs when Y = AE_planned:\nY = 600 + (2/3)Y\n(1/3)Y = 600\nY* = $1,800B." },
  { id: 'p15', chapter: "Ch 31: Inflation & Deflation", topic: "COMP 14: Seigniorage & Inflation Tax", question: "Maria holds $1,000 in cash. Over the year, the inflation rate is 10%. \nCalculate the real inflation tax paid by Maria. \nIf the inflation rate was 25%, what would the tax be?", solution: "Real Inflation Tax = Inflation Rate × Real Money Holdings.\n\nAt 10% inflation:\n0.10 × $1,000 = $100.\n\nAt 25% inflation:\n0.25 × $1,000 = $250." },
  { id: 'p16', chapter: "Ch 31: Inflation & Deflation", topic: "COMP 14: Comparing Inflation Tax", question: "In India (2019), the Inflation Rate was 7.66% and the Money Supply was Rp 36,883 Billion.\n\nCalculate the Inflation Tax.", solution: "Inflation Tax = Inflation Rate × Money Supply\nInflation Tax = 0.0766 × 36,883 = Rp 2,825 Billion." },
  { id: 'p17', chapter: "Ch 32: Events and Ideas", topic: "COMP 16: Velocity of Money", question: "In Egypt, Nominal GDP is 1,838 billion Egyptian pounds and M1 is 540 billion Egyptian pounds.\n\nCalculate the velocity of money.", solution: "Velocity Equation: M × V = P × Y (where P × Y is Nominal GDP).\n\nV = Nominal GDP / M\nV = 1,838 / 540 = 3.4" },
  { id: 'p18', chapter: "Ch 33: International Macroeconomics", topic: "COMP 17: Balance of Payments", question: "Scottopia has:\nExports of Goods = $400B, Exports of Services = $300B.\nImports of Goods = $500B, Imports of Services = $350B.\nForeigners purchase $250B of Scottopian assets.\n\nCalculate the Current Account (CA) and the Financial Account (FA).", solution: "1. Current Account (CA):\nCA = (400 + 300) - (500 + 350) = 700 - 850 = -$150B (Deficit)\n\n2. Financial Account (FA):\nSince CA + FA = 0, FA must be +$150B (Surplus).\n(Meaning Scottopians bought $100B in foreign assets to offset the $250B foreigners bought)." },
  { id: 'p19', chapter: "Ch 33: International Macroeconomics", topic: "COMP 18: Real Exchange Rates", question: "The nominal exchange rate is 18.82 Mexican Pesos per 1 USD.\nThe US Price Index is 120 and the Mexican Price Index is 150.\n\nCalculate the Real Exchange Rate (Pesos per Dollar).", solution: "Real Exchange Rate = Nominal Exchange Rate × (Domestic Price Level / Foreign Price Level)\n*Assuming US is domestic, Mexico is foreign:\n\nReal Rate = 18.82 × (120 / 150) = 18.82 × 0.8 = 15.056 Pesos per USD." },
  { id: 'p20', chapter: "Ch 33: International Macroeconomics", topic: "COMP 19: Purchasing Power Parity", question: "A Big Mac costs $5.67 in the US and 50 Pesos in Mexico. The actual nominal exchange rate is 18.82 Pesos per Dollar.\n\nCalculate the Implied Purchasing Power Parity (PPP) exchange rate.", solution: "PPP is the exchange rate that equalizes the cost of the basket in both countries.\n\nImplied PPP = Price in MXN / Price in USD\nImplied PPP = 50 / 5.67 = 8.82 Pesos per USD.\n\n(Because 8.82 < 18.82, the Peso is currently undervalued compared to PPP)." }
];

// --- COMPONENTS ---

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
  const [activeTab, setActiveTab] = useState('crashcourse'); // 'crashcourse', 'flashcards', 'practice', 'test', 'analytics'
  const [selectedChapter, setSelectedChapter] = useState("All Chapters");
  const [showConfetti, setShowConfetti] = useState(false);
  const [showNeedsReviewOnly, setShowNeedsReviewOnly] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const [globalTimeLeft, setGlobalTimeLeft] = useState(null);
  const [questionTimeLeft, setQuestionTimeLeft] = useState(null);

  // Upgraded Test Configuration State
  const [testConfig, setTestConfig] = useState({
    count: 10,       
    timePreset: 'none', // 'none', '5', '10', 'custom'
    customTime: '',
    pressureMode: false
  });

  // Analytics Expanded Chapter State
  const [expandedChapter, setExpandedChapter] = useState(null);

  // Progress Tracking State
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

  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset all your progress?")) {
      setProgress({});
    }
  };

  // Flashcard State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const filteredCards = useMemo(() => {
    let subset = flashcardsData;
    if (selectedChapter !== "All Chapters") {
      subset = subset.filter(c => c.chapter === selectedChapter);
    }
    if (showNeedsReviewOnly) {
      subset = subset.filter(c => progress[c.id] === 'review');
    }
    return subset;
  }, [selectedChapter, showNeedsReviewOnly, progress]);

  // Practice State
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  
  const filteredPractice = useMemo(() => {
    let subset = practiceData;
    if (selectedChapter !== "All Chapters") {
      subset = subset.filter(p => p.chapter.includes(selectedChapter));
    }
    if (showNeedsReviewOnly) {
      subset = subset.filter(p => progress[p.id] === 'review');
    }
    return subset;
  }, [selectedChapter, showNeedsReviewOnly, progress]);

  // Test Mode State
  const [testState, setTestState] = useState('idle'); 
  const [testQueue, setTestQueue] = useState([]);
  const [testScore, setTestScore] = useState({ correct: 0, total: 0, missed: [] });

  // Refs for keyboard shortcuts to avoid stale closures
  const stateRef = useRef({
    activeTab, currentIndex, isFlipped, filteredCards, practiceIndex, showSolution, filteredPractice, testState, testQueue, testConfig
  });
  
  useEffect(() => {
    stateRef.current = { activeTab, currentIndex, isFlipped, filteredCards, practiceIndex, showSolution, filteredPractice, testState, testQueue, testConfig };
  }, [activeTab, currentIndex, isFlipped, filteredCards, practiceIndex, showSolution, filteredPractice, testState, testQueue, testConfig]);

  // Reset indices when changing filters
  useEffect(() => {
    setCurrentIndex(0);
    setPracticeIndex(0);
    setIsFlipped(false);
    setShowSolution(false);
  }, [selectedChapter, showNeedsReviewOnly, activeTab]);

  const chapters = ["All Chapters", ...new Set(flashcardsData.map(card => card.chapter))];

  const handleNextCard = () => { setIsFlipped(false); setTimeout(() => setCurrentIndex((prev) => (prev + 1) % stateRef.current.filteredCards.length), 150); };
  const handlePrevCard = () => { setIsFlipped(false); setTimeout(() => setCurrentIndex((prev) => (prev - 1 + stateRef.current.filteredCards.length) % stateRef.current.filteredCards.length), 150); };
  
  const handleNextPractice = () => { setShowSolution(false); setTimeout(() => setPracticeIndex((prev) => (prev + 1) % stateRef.current.filteredPractice.length), 150); };
  const handlePrevPractice = () => { setShowSolution(false); setTimeout(() => setPracticeIndex((prev) => (prev - 1 + stateRef.current.filteredPractice.length) % stateRef.current.filteredPractice.length), 150); };

  const calculateMastery = () => {
    let totalItems = flashcardsData.length + practiceData.length;
    let masteredCount = 0;
    flashcardsData.forEach(c => { if (progress[c.id] === 'mastered') masteredCount++; });
    practiceData.forEach(p => { if (progress[p.id] === 'mastered') masteredCount++; });
    return totalItems === 0 ? 0 : Math.round((masteredCount / totalItems) * 100);
  };

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  const handleTimeOutAutoFail = () => {
     const q = stateRef.current;
     setTestScore(prev => ({ ...prev, missed: [...prev.missed, q.testQueue[q.currentIndex]] }));
     if (q.currentIndex + 1 >= q.testQueue.length) {
       setTestState('results');
     } else {
       setIsFlipped(false);
       setTimeout(() => {
         setCurrentIndex(prev => prev + 1);
         setQuestionTimeLeft(30);
       }, 150);
     }
  };

  // Direct Task Navigation Handler
  const handleNavigateToTask = (task, statChapter) => {
    setSelectedChapter(statChapter);
    setShowNeedsReviewOnly(false); // Turn off the filter so the user sees the task in context
    
    if (task.type === 'Concept') {
      setActiveTab('flashcards');
      const index = flashcardsData.filter(c => c.chapter === statChapter).findIndex(c => c.id === task.id);
      setCurrentIndex(Math.max(0, index));
      setIsFlipped(false);
    } else {
      setActiveTab('practice');
      const index = practiceData.filter(p => p.chapter.includes(statChapter)).findIndex(p => p.id === task.id);
      setPracticeIndex(Math.max(0, index));
      setShowSolution(false);
    }
  };

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
      
      const { activeTab, currentIndex, isFlipped, filteredCards, practiceIndex, showSolution, filteredPractice, testState } = stateRef.current;

      if (activeTab === 'flashcards' && filteredCards.length > 0) {
        if (e.code === 'Space') { e.preventDefault(); setIsFlipped(!isFlipped); }
        if (e.code === 'ArrowRight') handleNextCard();
        if (e.code === 'ArrowLeft') handlePrevCard();
        if (e.key.toLowerCase() === 'n') markProgress(filteredCards[currentIndex].id, 'review');
        if (e.key.toLowerCase() === 'm') { 
          markProgress(filteredCards[currentIndex].id, 'mastered'); 
          if(calculateMastery() >= 90) triggerConfetti(); 
        }
      } else if (activeTab === 'practice' && filteredPractice.length > 0) {
        if (e.code === 'Space') { e.preventDefault(); setShowSolution(!showSolution); }
        if (e.code === 'ArrowRight') handleNextPractice();
        if (e.code === 'ArrowLeft') handlePrevPractice();
        if (e.key.toLowerCase() === 'n') markProgress(filteredPractice[practiceIndex].id, 'review');
        if (e.key.toLowerCase() === 'm') { 
          markProgress(filteredPractice[practiceIndex].id, 'mastered'); 
          if(calculateMastery() >= 90) triggerConfetti(); 
        }
      } else if (activeTab === 'test' && testState === 'running') {
        if (e.code === 'Space' && !isFlipped) { e.preventDefault(); setIsFlipped(true); }
        if (isFlipped && e.key.toLowerCase() === 'n') { e.preventDefault(); handleTestAnswer(false); }
        if (isFlipped && e.key.toLowerCase() === 'm') { e.preventDefault(); handleTestAnswer(true); }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Dual Timer Logic
  useEffect(() => {
    let timer;
    if (testState === 'running') {
      timer = setInterval(() => {
        setGlobalTimeLeft(prev => (prev !== null && prev > 0 ? prev - 1 : prev));
        if (!isFlipped) {
          setQuestionTimeLeft(prev => (prev !== null && prev > 0 ? prev - 1 : prev));
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [testState, isFlipped]);

  // Handle Global Timeout
  useEffect(() => {
    if (testState === 'running' && globalTimeLeft === 0) {
      setTestState('results');
    }
  }, [globalTimeLeft, testState]);

  // Handle Question Timeout
  useEffect(() => {
    if (testState === 'running' && !isFlipped && questionTimeLeft === 0) {
       handleTimeOutAutoFail();
    }
  }, [questionTimeLeft, testState, isFlipped]);

  const startTest = () => {
    let cardPool = selectedChapter === "All Chapters" ? flashcardsData : flashcardsData.filter(c => c.chapter === selectedChapter);
    let practicePool = selectedChapter === "All Chapters" ? practiceData : practiceData.filter(p => p.chapter.includes(selectedChapter));
    
    if (showNeedsReviewOnly) {
      cardPool = cardPool.filter(c => progress[c.id] === 'review');
      practicePool = practicePool.filter(p => progress[p.id] === 'review');
    }

    const shuffledCards = [...cardPool].map(c => ({...c, type: 'card'}));
    const shuffledPractice = [...practicePool].map(p => ({...p, type: 'practice'}));
    let combined = [...shuffledCards, ...shuffledPractice].sort(() => 0.5 - Math.random());
    
    if (testConfig.count !== 'all') {
      combined = combined.slice(0, testConfig.count);
    }

    if (combined.length === 0) return;

    setTestQueue(combined);
    setCurrentIndex(0);
    setTestScore({ correct: 0, total: combined.length, missed: [] });
    setTestState('running');
    setIsFlipped(false);
    
    // Init timers
    if (testConfig.pressureMode) setQuestionTimeLeft(30);
    else setQuestionTimeLeft(null);

    let totalMins = 0;
    if (testConfig.timePreset === 'custom') totalMins = parseInt(testConfig.customTime) || 0;
    else if (testConfig.timePreset !== 'none') totalMins = parseInt(testConfig.timePreset) || 0;
    
    setGlobalTimeLeft(totalMins > 0 ? totalMins * 60 : null);
  };

  const handleTestAnswer = (isCorrect) => {
    if (isCorrect) {
      setTestScore(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setTestScore(prev => ({ ...prev, missed: [...prev.missed, testQueue[currentIndex]] }));
    }
    
    if (currentIndex + 1 >= testQueue.length) {
      setTestState('results');
      if ((testScore.correct + (isCorrect ? 1 : 0)) / testQueue.length >= 0.8) {
        triggerConfetti();
      }
    } else {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        if (testConfig.pressureMode) setQuestionTimeLeft(30);
      }, 150);
    }
  };

  const formatTime = (seconds) => {
    if (seconds === null || isNaN(seconds)) return '';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Analytics Dashboard Data
  const globalStats = useMemo(() => {
    let m = 0, r = 0, u = 0;
    const allItems = [...flashcardsData, ...practiceData];
    allItems.forEach(i => {
       if (progress[i.id] === 'mastered') m++;
       else if (progress[i.id] === 'review') r++;
       else u++;
    });
    return { mastered: m, review: r, unseen: u };
  }, [progress]);

  const chapterStats = useMemo(() => {
    return chapters.filter(c => c !== "All Chapters").map(chap => {
      const cards = flashcardsData.filter(c => c.chapter === chap);
      const prac = practiceData.filter(p => p.chapter.includes(chap));
      const total = cards.length + prac.length;
      const mastered = [...cards, ...prac].filter(i => progress[i.id] === 'mastered').length;
      return { chapter: chap, total, mastered, pct: total ? Math.round((mastered/total)*100) : 0 };
    }).sort((a,b) => a.pct - b.pct);
  }, [progress]);

  const getUnmasteredTasks = (chap) => {
    const cards = flashcardsData.filter(c => c.chapter === chap && progress[c.id] !== 'mastered').map(c => ({...c, type: 'Concept'}));
    const pracs = practiceData.filter(p => p.chapter.includes(chap) && progress[p.id] !== 'mastered').map(p => ({...p, type: 'Computation'}));
    return [...cards, ...pracs];
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''} font-sans`}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 flex flex-col transition-colors duration-300">
        {showConfetti && <Confetti />}
        
        {/* Header & Navigation */}
        <header className="bg-blue-900 dark:bg-slate-950 text-white shadow-md transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col lg:flex-row justify-between items-center gap-4 border-b border-blue-800 dark:border-slate-800">
            <div className="flex items-center gap-2 w-full lg:w-auto justify-between lg:justify-start">
              <div className="flex items-center gap-2">
                <BookOpen size={28} className="text-blue-300" />
                <h1 className="text-2xl font-bold tracking-tight whitespace-nowrap">Macro Exam Prep</h1>
              </div>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className="p-2 rounded-full hover:bg-white/10 transition-colors block lg:hidden"
              >
                {isDarkMode ? <Sun size={20} className="text-amber-300"/> : <Moon size={20} className="text-blue-200"/>}
              </button>
            </div>
            
            <div className="flex bg-blue-950 dark:bg-slate-800 rounded-lg p-1 w-full lg:w-auto overflow-x-auto snap-x scrollbar-hide shrink-0">
              <button onClick={() => {setActiveTab('crashcourse'); setTestState('idle');}} className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-md font-medium transition-colors ${activeTab === 'crashcourse' ? 'bg-blue-600 text-white' : 'text-blue-300 dark:text-slate-300 hover:text-white hover:bg-blue-800 dark:hover:bg-slate-700'}`}>
                <BookText size={18} /> Crash Course
              </button>
              <button onClick={() => {setActiveTab('flashcards'); setTestState('idle');}} className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-md font-medium transition-colors ${activeTab === 'flashcards' ? 'bg-blue-600 text-white' : 'text-blue-300 dark:text-slate-300 hover:text-white hover:bg-blue-800 dark:hover:bg-slate-700'}`}>
                <BrainCircuit size={18} /> Concepts
              </button>
              <button onClick={() => {setActiveTab('practice'); setTestState('idle');}} className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-md font-medium transition-colors ${activeTab === 'practice' ? 'bg-blue-600 text-white' : 'text-blue-300 dark:text-slate-300 hover:text-white hover:bg-blue-800 dark:hover:bg-slate-700'}`}>
                <Calculator size={18} /> Practice Lab
              </button>
              <button onClick={() => setActiveTab('test')} className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-md font-medium transition-colors ${activeTab === 'test' ? 'bg-amber-600 text-white' : 'text-blue-300 dark:text-slate-300 hover:text-white hover:bg-blue-800 dark:hover:bg-slate-700'}`}>
                <GraduationCap size={18} /> Test Mode
              </button>
              <button onClick={() => {setActiveTab('analytics'); setTestState('idle');}} className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-md font-medium transition-colors ${activeTab === 'analytics' ? 'bg-indigo-600 text-white' : 'text-blue-300 dark:text-slate-300 hover:text-white hover:bg-blue-800 dark:hover:bg-slate-700'}`}>
                <BarChart3 size={18} /> Analytics
              </button>
            </div>
            
            <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className="p-2 rounded-full hover:bg-white/10 transition-colors hidden lg:block"
                title="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun size={20} className="text-amber-300"/> : <Moon size={20} className="text-blue-200"/>}
              </button>
          </div>

          {/* Filter and Progress Bar */}
          {activeTab !== 'crashcourse' && activeTab !== 'test' && activeTab !== 'analytics' && (
            <div className="bg-blue-800 dark:bg-slate-900 py-3 transition-colors duration-300">
              <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                  <select 
                    className="bg-blue-900 dark:bg-slate-800 text-white border border-blue-600 dark:border-slate-600 rounded-md px-3 py-1.5 outline-none focus:ring-2 focus:ring-blue-400 font-medium text-sm w-full sm:w-auto"
                    value={selectedChapter}
                    onChange={(e) => setSelectedChapter(e.target.value)}
                  >
                    {chapters.map(chap => <option key={chap} value={chap}>{chap}</option>)}
                  </select>

                  <button 
                    onClick={() => setShowNeedsReviewOnly(!showNeedsReviewOnly)}
                    className={`flex items-center gap-2 px-3 py-1.5 w-full sm:w-auto justify-center rounded-md border text-sm font-bold transition-all ${showNeedsReviewOnly ? 'bg-orange-500 border-orange-500 text-white shadow-inner' : 'bg-blue-900 dark:bg-slate-800 border-blue-600 dark:border-slate-600 text-blue-200 dark:text-slate-300 hover:text-white hover:border-blue-400'}`}
                  >
                    <Filter size={16} /> Needs Review Only
                  </button>
                </div>
                
                <div className="flex items-center gap-3 w-full md:w-1/3">
                  <span className="text-sm font-medium text-blue-200 dark:text-slate-300 whitespace-nowrap">Overall Mastery: {calculateMastery()}%</span>
                  <div className="w-full bg-blue-950 dark:bg-slate-950 rounded-full h-2.5">
                    <div className="bg-green-400 h-2.5 rounded-full transition-all duration-500" style={{ width: `${calculateMastery()}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col items-center justify-start p-4 max-w-4xl mx-auto w-full pt-8 pb-12">
          
          {/* ANALYTICS DASHBOARD */}
          {activeTab === 'analytics' && (
            <div className="w-full animate-in fade-in duration-500 flex flex-col gap-6">
              
              {/* Global Study Controls */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-2">
                 <button 
                   onClick={() => { setActiveTab('flashcards'); setSelectedChapter('All Chapters'); setShowNeedsReviewOnly(true); }} 
                   className="px-8 py-3 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 shadow-md transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
                 >
                   <PlayCircle size={20}/> Study All Weaknesses
                 </button>
                 <button 
                   onClick={resetProgress} 
                   className="px-6 py-3 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-full hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
                 >
                   <RotateCcw size={18}/> Reset Progress
                 </button>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-8 text-center border border-slate-200 dark:border-slate-700">
                <BarChart3 size={48} className="mx-auto mb-4 text-indigo-500" />
                <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">Weakness Dashboard</h2>
                
                <div className="grid grid-cols-3 gap-4 w-full mb-10 border-b dark:border-slate-700 pb-8">
                   <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 flex flex-col items-center">
                     <span className="text-3xl font-black text-green-600 dark:text-green-400">{globalStats.mastered}</span>
                     <span className="text-xs uppercase font-bold text-green-800 dark:text-green-500 mt-1">Mastered</span>
                   </div>
                   <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-4 flex flex-col items-center">
                     <span className="text-3xl font-black text-orange-600 dark:text-orange-400">{globalStats.review}</span>
                     <span className="text-xs uppercase font-bold text-orange-800 dark:text-orange-500 mt-1">Needs Review</span>
                   </div>
                   <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex flex-col items-center">
                     <span className="text-3xl font-black text-slate-600 dark:text-slate-400">{globalStats.unseen}</span>
                     <span className="text-xs uppercase font-bold text-slate-500 dark:text-slate-500 mt-1">Unseen</span>
                   </div>
                </div>

                <p className="text-slate-500 dark:text-slate-400 font-medium mb-6">Click on any chapter to see the exact items you need to master.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  {chapterStats.map(stat => (
                    <div 
                      key={stat.chapter} 
                      onClick={() => setExpandedChapter(expandedChapter === stat.chapter ? null : stat.chapter)}
                      className={`p-5 rounded-xl border-l-4 shadow-sm flex flex-col gap-3 cursor-pointer transition-all hover:scale-[1.02] ${stat.pct < 50 ? 'bg-red-50 border-red-500 dark:bg-red-900/10 dark:hover:bg-red-900/20' : stat.pct >= 90 ? 'bg-green-50 border-green-500 dark:bg-green-900/10 dark:hover:bg-green-900/20' : 'bg-white border-blue-500 dark:bg-slate-800 dark:hover:bg-slate-750'}`}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className={`font-bold text-sm ${stat.pct < 50 ? 'text-red-800 dark:text-red-300' : 'text-slate-700 dark:text-slate-200'}`}>{stat.chapter}</h3>
                        <div className="flex items-center gap-2">
                           {stat.pct < 50 && <AlertTriangle size={16} className="text-red-500 shrink-0" />}
                           <ChevronDown size={16} className={`transition-transform text-slate-400 ${expandedChapter === stat.chapter ? 'rotate-180' : ''}`} />
                        </div>
                      </div>
                      <div className="flex items-center gap-3 w-full">
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                          <div className={`h-2 rounded-full ${stat.pct < 50 ? 'bg-red-500' : stat.pct >= 90 ? 'bg-green-500' : 'bg-blue-500'}`} style={{ width: `${stat.pct}%` }}></div>
                        </div>
                        <span className={`text-xs font-bold ${stat.pct < 50 ? 'text-red-600' : 'text-slate-500 dark:text-slate-400'}`}>{stat.pct}%</span>
                      </div>
                      <span className="text-xs text-slate-400 dark:text-slate-500">{stat.mastered} of {stat.total} Mastered</span>
                      
                      {/* Drill-down list for unmastered tasks */}
                      {expandedChapter === stat.chapter && (
                        <div className="mt-4 border-t border-slate-200 dark:border-slate-600/50 pt-4 animate-in slide-in-from-top-2" onClick={(e) => e.stopPropagation()}>
                          <div className="flex justify-between items-center mb-3">
                             <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300">Items left to conquer:</h4>
                             <button 
                               onClick={(e) => {
                                 e.stopPropagation();
                                 setSelectedChapter(stat.chapter);
                                 setShowNeedsReviewOnly(true);
                                 setActiveTab('flashcards');
                               }}
                               className="px-3 py-1.5 bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-md text-xs font-bold transition-colors shadow-sm"
                             >
                               Study This Chapter
                             </button>
                          </div>
                          <ul className="flex flex-col gap-2 max-h-56 overflow-y-auto pr-2 scrollbar-thin">
                             {getUnmasteredTasks(stat.chapter).map(task => (
                                <li 
                                  key={task.id} 
                                  onClick={(e) => { e.stopPropagation(); handleNavigateToTask(task, stat.chapter); }}
                                  className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-700 flex justify-between items-center gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                                >
                                   <div className="flex-1 flex flex-col overflow-hidden text-left">
                                     <span className="truncate text-slate-700 dark:text-slate-200 font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-sm" title={task.question}>{task.question}</span>
                                     {task.topic && <span className="text-xs text-slate-400 truncate mt-0.5">{task.topic}</span>}
                                   </div>
                                   <div className="flex items-center gap-2 shrink-0">
                                     <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-md ${task.type === 'Concept' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'}`}>{task.type}</span>
                                     <ChevronRight size={16} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />
                                   </div>
                                </li>
                             ))}
                             {getUnmasteredTasks(stat.chapter).length === 0 && (
                                <li className="text-green-600 font-medium text-center p-2">All tasks mastered! Awesome job.</li>
                             )}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CRASH COURSE MODE */}
          {activeTab === 'crashcourse' && (
            <div className="w-full animate-in fade-in duration-500 flex flex-col gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-8 text-center border border-slate-200 dark:border-slate-700">
                <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">Macroeconomics Crash Course</h2>
                <p className="text-slate-500 dark:text-slate-400 text-lg">Scroll through to quickly absorb the core concepts and graphs before testing yourself.</p>
              </div>

              {chapters.filter(c => c !== "All Chapters").map(chap => (
                <div key={chap} className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden border border-slate-200 dark:border-slate-700">
                  <div className="bg-blue-50 dark:bg-slate-900 border-b border-blue-100 dark:border-slate-700 p-4 px-6">
                    <h3 className="font-bold text-blue-900 dark:text-blue-300 text-lg">{chap}</h3>
                  </div>
                  
                  {/* Wrap graphics in a white container to preserve SVG color integrity in Dark Mode */}
                  {renderChapterGraphic(chap) && (
                    <div className="bg-slate-100 dark:bg-slate-200 pt-1 border-b dark:border-slate-700">
                       {renderChapterGraphic(chap)}
                    </div>
                  )}

                  <div className="divide-y divide-slate-100 dark:divide-slate-700">
                    {flashcardsData.filter(c => c.chapter === chap).map((card, idx) => (
                      <div key={idx} className="p-6 flex flex-col md:flex-row gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                        <div className="md:w-1/3 font-semibold text-slate-800 dark:text-slate-200">{card.question}</div>
                        <div className="md:w-2/3 text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed">{card.answer}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* FLASHCARD MODE */}
          {activeTab === 'flashcards' && (
            <div className="w-full max-w-2xl flex flex-col animate-in fade-in duration-500">
              {filteredCards.length > 0 ? (
                <>
                  <div className="mb-4 flex justify-between items-end px-2">
                    <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{filteredCards[currentIndex].chapter}</span>
                    <span className="text-sm font-bold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 px-4 rounded-full">Card {currentIndex + 1} of {filteredCards.length}</span>
                  </div>

                  <div className="w-full h-96 md:h-[32rem] relative cursor-pointer group [perspective:1000px]" onClick={() => setIsFlipped(!isFlipped)}>
                    <div className={`w-full h-full transition-transform duration-500 shadow-xl rounded-2xl relative [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                      {/* Front */}
                      <div className="absolute inset-0 w-full h-full bg-white dark:bg-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center border-t-4 border-blue-500 [backface-visibility:hidden]">
                        <div className="absolute top-6">
                          <span className="text-blue-500 font-bold uppercase tracking-widest text-xs border border-blue-200 dark:border-blue-800 px-3 py-1 rounded-full bg-blue-50 dark:bg-slate-900">Question</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-center leading-relaxed px-4 text-slate-800 dark:text-slate-100">
                          {filteredCards[currentIndex].question}
                        </h2>
                        <div className="absolute bottom-6 flex flex-col items-center justify-center w-full text-slate-400">
                          <p className="text-sm flex items-center gap-1 font-medium"><RotateCcw size={14}/> Click or press [Space] to flip</p>
                        </div>
                      </div>

                      {/* Back */}
                      <div className="absolute inset-0 w-full h-full bg-blue-50 dark:bg-slate-900 rounded-2xl p-6 flex flex-col items-center justify-start border-t-4 border-green-500 overflow-y-auto [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="shrink-0 mb-4">
                          <span className="text-green-600 font-bold uppercase tracking-widest text-xs border border-green-200 dark:border-green-800 px-3 py-1 rounded-full bg-green-100 dark:bg-slate-800">Answer</span>
                        </div>
                        <div className="flex-1 w-full flex flex-col items-center justify-center pb-8">
                          <p className="text-base md:text-lg text-center leading-relaxed whitespace-pre-line text-slate-700 dark:text-slate-300">
                            {filteredCards[currentIndex].answer}
                          </p>
                          {/* Inject Visual Graphic */}
                          {filteredCards[currentIndex].graphic && (
                            <div className="w-full max-w-[320px] shrink-0 mt-6 bg-white dark:bg-slate-200 rounded-xl shadow-sm border border-slate-200 p-2">
                              {renderGraphic(filteredCards[currentIndex].graphic)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress & Nav Controls */}
                  <div className="mt-8 flex flex-col items-center gap-4">
                    <div className="flex gap-4">
                       <button onClick={() => markProgress(filteredCards[currentIndex].id, 'review')} className={`px-4 py-2 rounded-lg text-sm font-bold border transition-colors ${progress[filteredCards[currentIndex].id] === 'review' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-800' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'}`}>[N] Needs Review</button>
                       <button onClick={() => { markProgress(filteredCards[currentIndex].id, 'mastered'); if(calculateMastery() >= 90) triggerConfetti(); }} className={`px-4 py-2 rounded-lg text-sm font-bold border transition-colors ${progress[filteredCards[currentIndex].id] === 'mastered' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-300 dark:border-green-800' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'}`}>[M] Mastered</button>
                    </div>
                    
                    <div className="flex items-center justify-center gap-6">
                      <button onClick={handlePrevCard} className="p-4 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"><ChevronLeft size={28} /></button>
                      <button onClick={() => setIsFlipped(!isFlipped)} className="px-8 py-3 rounded-full bg-blue-600 dark:bg-blue-700 text-white font-semibold shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 hidden md:block">Press Space to Flip</button>
                      <button onClick={handleNextCard} className="p-4 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"><ChevronRight size={28} /></button>
                    </div>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium tracking-wide">Keyboard shortcuts enabled. Use Arrows, Space, N, and M.</span>
                  </div>
                </>
              ) : (
                <div className="text-center text-slate-500 p-10 bg-white dark:bg-slate-800 rounded-2xl shadow-sm"><Filter size={48} className="mx-auto mb-4 text-slate-300" /><h2 className="text-xl font-medium">No cards found</h2><p className="mt-2 text-sm">Adjust your filters above to see more.</p></div>
              )}
            </div>
          )}

          {/* PRACTICE LAB MODE */}
          {activeTab === 'practice' && (
            <div className="w-full max-w-3xl flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
              {filteredPractice.length > 0 ? (
                <>
                  <div className="mb-4 flex justify-between items-end px-2">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider">Exam Computation</span>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{filteredPractice[practiceIndex].topic}</span>
                    </div>
                    <span className="text-sm font-bold bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 py-1 px-4 rounded-full shadow-sm border border-indigo-200 dark:border-indigo-800">
                      Task {practiceIndex + 1} of {filteredPractice.length}
                    </span>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                    <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-700">
                      <h3 className="text-lg font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2"><Calculator size={20} className="text-indigo-500"/> The Problem</h3>
                      <p className="text-xl leading-relaxed whitespace-pre-line text-slate-800 dark:text-slate-200 font-medium">{filteredPractice[practiceIndex].question}</p>
                    </div>

                    <div className={`p-6 md:p-8 transition-colors duration-500 ${showSolution ? 'bg-indigo-50/50 dark:bg-indigo-900/20' : 'bg-slate-50 dark:bg-slate-900'}`}>
                      {!showSolution ? (
                        <div className="flex flex-col items-center justify-center py-6">
                          <p className="text-slate-500 dark:text-slate-400 mb-6 text-center">Work out the math on paper, then check your steps.</p>
                          <button onClick={() => setShowSolution(true)} className="px-8 py-3 rounded-full bg-indigo-600 dark:bg-indigo-700 text-white font-bold shadow-md hover:bg-indigo-700 flex items-center gap-2">
                            <CheckCircle2 size={20} /> Reveal Step-by-Step Solution
                          </button>
                          <p className="text-xs text-slate-400 mt-4">(Or press Spacebar)</p>
                        </div>
                      ) : (
                        <div className="animate-in fade-in duration-500">
                          <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-4 flex items-center gap-2"><CheckCircle2 size={20} /> The Solution</h3>
                          <p className="text-lg leading-relaxed whitespace-pre-line text-slate-700 dark:text-slate-300 font-mono bg-white dark:bg-slate-800 p-6 rounded-xl border border-indigo-100 dark:border-indigo-900 shadow-sm">{filteredPractice[practiceIndex].solution}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Progress & Nav Controls */}
                  <div className="mt-8 flex flex-col items-center gap-4">
                    <div className="flex gap-4">
                       <button onClick={() => markProgress(filteredPractice[practiceIndex].id, 'review')} className={`px-4 py-2 rounded-lg text-sm font-bold border transition-colors ${progress[filteredPractice[practiceIndex].id] === 'review' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-800' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'}`}>[N] Needs Review</button>
                       <button onClick={() => { markProgress(filteredPractice[practiceIndex].id, 'mastered'); if(calculateMastery() >= 90) triggerConfetti(); }} className={`px-4 py-2 rounded-lg text-sm font-bold border transition-colors ${progress[filteredPractice[practiceIndex].id] === 'mastered' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-300 dark:border-green-800' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'}`}>[M] Mastered</button>
                    </div>
                    <div className="flex items-center justify-center gap-6">
                      <button onClick={handlePrevPractice} className="p-4 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-indigo-600"><ChevronLeft size={28} /></button>
                      <button onClick={handleNextPractice} className="p-4 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-indigo-600"><ChevronRight size={28} /></button>
                    </div>
                  </div>
                </>
               ) : (
                <div className="text-center text-slate-500 p-10 bg-white dark:bg-slate-800 rounded-2xl shadow-sm"><Filter size={48} className="mx-auto mb-4 text-slate-300" /><h2 className="text-xl font-medium">No practice tasks found</h2><p className="mt-2 text-sm">Adjust your filters above to see more.</p></div>
              )}
            </div>
          )}

          {/* TEST MODE */}
          {activeTab === 'test' && (
            <div className="w-full max-w-3xl flex flex-col items-center animate-in fade-in duration-500">
              {testState === 'idle' && (
                <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-lg text-center w-full border-t-4 border-amber-500 dark:border-slate-700">
                  <Trophy size={64} className="mx-auto text-amber-500 mb-6" />
                  <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">Exam Simulator</h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    Build a custom test from your current filter. <br/>Challenge yourself under exam conditions!
                  </p>
                  
                  <div className="bg-amber-50 dark:bg-slate-900 border dark:border-slate-700 p-4 rounded-lg mb-8 text-amber-800 dark:text-slate-300 font-medium max-w-lg mx-auto">
                    Current Scope: {selectedChapter} {showNeedsReviewOnly ? '(Needs Review Only)' : ''}
                  </div>

                  {/* Test Configuration */}
                  <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch mb-10 max-w-xl mx-auto border-y dark:border-slate-700 py-6">
                    
                    {/* Number of Questions Select */}
                    <div className="flex flex-col text-left flex-1">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Total Questions</label>
                      <select 
                        value={testConfig.count} 
                        onChange={(e) => setTestConfig({...testConfig, count: e.target.value === 'all' ? 'all' : Number(e.target.value)})}
                        className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400 font-medium"
                      >
                        <option value={5}>5 Questions</option>
                        <option value={10}>10 Questions</option>
                        <option value={20}>20 Questions</option>
                        <option value="all">All Available</option>
                      </select>
                    </div>

                    {/* Overall Timer Select */}
                    <div className="flex flex-col text-left flex-1">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                        Test Time Limit
                      </label>
                      <div className="flex gap-2">
                        <select 
                          value={testConfig.timePreset} 
                          onChange={(e) => setTestConfig({...testConfig, timePreset: e.target.value, customTime: e.target.value === 'custom' ? testConfig.customTime : ''})}
                          className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-3 outline-none focus:ring-2 focus:ring-amber-400 font-medium flex-1"
                        >
                          <option value="none">No Limit</option>
                          <option value="5">5 Minutes</option>
                          <option value="10">10 Minutes</option>
                          <option value="custom">Custom...</option>
                        </select>
                        {testConfig.timePreset === 'custom' && (
                          <input 
                            type="number" 
                            min="1"
                            max="120"
                            placeholder="Mins"
                            value={testConfig.customTime}
                            onChange={(e) => setTestConfig({...testConfig, customTime: e.target.value})}
                            className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-3 outline-none focus:ring-2 focus:ring-amber-400 font-medium w-20"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Pressure Mode Toggle */}
                  <label className="flex items-center justify-center gap-3 mb-8 cursor-pointer group">
                    <div className={`w-12 h-6 rounded-full p-1 transition-colors ${testConfig.pressureMode ? 'bg-red-500' : 'bg-slate-300 dark:bg-slate-600'}`}>
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${testConfig.pressureMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
                    </div>
                    <span className="font-bold flex items-center gap-2 text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      <Timer size={18}/> Enable 30s Pressure Timer per Question
                      <Info size={14} className="text-slate-400" title="Forces you to answer within 30 seconds for each individual question. Can be combined with an overall test limit."/>
                    </span>
                  </label>

                  <button onClick={startTest} className="px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold shadow-md hover:shadow-lg transition-all text-lg flex items-center gap-2 mx-auto">
                    Start the Test
                  </button>
                </div>
              )}

              {testState === 'running' && testQueue.length > 0 && (
                <div className="w-full">
                  <div className="mb-6 w-full flex justify-between items-center gap-2">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden sm:block">
                        {testQueue[currentIndex].type === 'card' ? 'Theory Concept' : 'Computation'}
                      </span>
                      
                      {/* Overall Test Timer */}
                      {globalTimeLeft !== null && (
                        <span className={`text-sm font-bold flex items-center gap-1 px-3 py-1 rounded-full ${globalTimeLeft <= 60 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
                          <Clock size={14}/> Total: {formatTime(globalTimeLeft)}
                        </span>
                      )}

                      {/* Per-Question Pressure Timer */}
                      {testConfig.pressureMode && !isFlipped && (
                        <span className={`text-sm font-bold flex items-center gap-1 px-3 py-1 rounded-full ${questionTimeLeft <= 5 ? 'bg-orange-100 text-orange-600 animate-pulse' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
                          <Timer size={14}/> Q: {questionTimeLeft}s
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-bold bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 py-1 px-4 rounded-full border border-amber-200 dark:border-amber-800">
                      Question {currentIndex + 1} of {testQueue.length}
                    </span>
                  </div>

                  <div className="w-full min-h-[30rem] relative mb-8">
                    <div className={`w-full h-full bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 flex flex-col border-t-4 ${testQueue[currentIndex].type === 'card' ? 'border-blue-500' : 'border-indigo-500'}`}>
                      
                      <h2 className="text-2xl font-semibold leading-relaxed mb-6 text-slate-800 dark:text-slate-100">
                        {testQueue[currentIndex].question}
                      </h2>

                      {!isFlipped ? (
                        <div className="mt-auto flex flex-col items-center justify-center">
                          <button onClick={() => setIsFlipped(true)} className="px-8 py-3 rounded-full bg-slate-800 dark:bg-slate-700 text-white font-semibold shadow-md hover:bg-slate-900 dark:hover:bg-slate-600 transition-all">
                            Reveal Answer
                          </button>
                          <p className="text-xs text-slate-400 mt-3">(Or press Spacebar)</p>
                        </div>
                      ) : (
                        <div className="mt-6 border-t dark:border-slate-700 pt-6 animate-in slide-in-from-top-4 duration-300">
                           <span className="text-green-600 font-bold mb-4 uppercase tracking-widest text-xs">Correct Answer:</span>
                           <p className="text-lg whitespace-pre-line text-slate-700 dark:text-slate-300 font-mono bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mt-2 border border-slate-100 dark:border-slate-800">
                             {testQueue[currentIndex].answer || testQueue[currentIndex].solution}
                           </p>

                           {testQueue[currentIndex].type === 'card' && testQueue[currentIndex].graphic && (
                              <div className="w-full max-w-[280px] mx-auto mt-4 shrink-0 bg-white dark:bg-slate-200 rounded-xl shadow-sm border border-slate-200 p-2">
                                {renderGraphic(testQueue[currentIndex].graphic)}
                              </div>
                           )}

                           <div className="mt-8 flex flex-col gap-3">
                             <p className="text-center font-bold text-slate-500">Did you get it right?</p>
                             <div className="flex justify-center gap-4">
                               <button onClick={() => handleTestAnswer(false)} className="px-6 py-3 rounded-xl border-2 border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 font-bold flex items-center gap-2"><XCircle size={20}/> [N] No</button>
                               <button onClick={() => handleTestAnswer(true)} className="px-6 py-3 rounded-xl border-2 border-green-200 dark:border-green-900/50 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 font-bold flex items-center gap-2"><CheckCircle2 size={20}/> [M] Yes</button>
                             </div>
                           </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {testState === 'results' && (
                <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-lg w-full border-t-4 border-green-500 animate-in zoom-in-95 duration-500">
                  <div className="text-center border-b dark:border-slate-700 pb-8 mb-8">
                    <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl font-black text-green-600 dark:text-green-400">{Math.round((testScore.correct / testScore.total) * 100)}%</span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">Test Complete!</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-2">You scored {testScore.correct} out of {testScore.total}.</p>
                    {globalTimeLeft === 0 && <p className="text-red-500 font-bold mb-2">Time expired!</p>}
                  </div>

                  {testScore.missed.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200"><AlertTriangle className="text-orange-500"/> Questions to Review:</h3>
                      <div className="flex flex-col gap-3">
                        {testScore.missed.map((item, idx) => (
                          <div key={idx} className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <span className="font-medium text-slate-700 dark:text-slate-300 text-left">{item.question.substring(0, 80)}...</span>
                            <button 
                              onClick={(e) => {
                                markProgress(item.id, 'review');
                                e.currentTarget.innerText = "Added!";
                                e.currentTarget.disabled = true;
                                e.currentTarget.classList.add('bg-slate-200', 'dark:bg-slate-800', 'text-slate-500');
                                e.currentTarget.classList.remove('bg-orange-100', 'hover:bg-orange-200', 'dark:bg-orange-900/30');
                              }} 
                              className="px-4 py-2 shrink-0 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-900/50 rounded-lg font-bold text-sm transition-colors"
                            >
                              Add to Needs Review
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <button onClick={() => setTestState('idle')} className="px-8 py-3 rounded-full bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 dark:hover:bg-slate-600 text-white font-bold shadow-md transition-all flex items-center gap-2 mx-auto">
                    <RefreshCw size={20} /> Take Another Test
                  </button>
                </div>
              )}

              {testState === 'running' && testQueue.length === 0 && (
                <div className="text-center text-slate-500 p-10 bg-white dark:bg-slate-800 rounded-2xl shadow-sm w-full"><Filter size={48} className="mx-auto mb-4 text-slate-300" /><h2 className="text-xl font-medium">No questions found</h2><p className="mt-2 text-sm">Adjust your filters to take a test.</p><button onClick={() => setTestState('idle')} className="mt-4 px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-md">Go Back</button></div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}