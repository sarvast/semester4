const optimizationQuestions2024_25 = [
    {
        question: "The best use of linear programming technique is to find the optimal use of:",
        options: [
            "(A) money",
            "(B) manpower",
            "(C) machine",
            "(D) all of the above"
        ],
        answer: "(D)",
        explanation: "Linear Programming is used to optimize the allocation of various limited resources, including money, manpower, and machines."
    },
    {
        question: "______ is used to reduce the game.",
        options: [
            "(A) Transportation Problem",
            "(B) Assignment Problem",
            "(C) Dual Simplex Method",
            "(D) Graphical Method"
        ],
        answer: "(D)",
        explanation: "In Game Theory, the Graphical Method (or Dominance Property) is used to reduce the size of a payoff matrix to a solvable size."
    },
    {
        question: "______ is a mathematical technique used to solve the problem of allocating limited resource among the competing activities.",
        options: [
            "(A) Linear Programming Problem",
            "(B) Assignment Problem",
            "(C) Replacement Problem",
            "(D) Non linear Programming Problem"
        ],
        answer: "(A)",
        explanation: "This is the standard definition of Linear Programming."
    },
    {
        question: "The area bounded by all the given constraints is called:",
        options: [
            "(A) feasible region",
            "(B) basic solution",
            "(C) non-feasible region",
            "(D) optimum basic feasible solution"
        ],
        answer: "(A)",
        explanation: "The set of all points that satisfy all constraints simultaneously is called the Feasible Region."
    },
    {
        question: "The solution to a transportation problem with m-sources and n-destinations is feasible if the numbers of allocations are:",
        options: [
            "(A) m+n",
            "(B) mn",
            "(C) m-n",
            "(D) m+n-1"
        ],
        answer: "(D)",
        explanation: "A basic feasible solution in a transportation problem must have exactly m+n-1 independent allocations."
    },
    {
        question: "Customer behavior in which the customer moves from one queue to another in a multiple channel situation is:",
        options: [
            "(A) Balking",
            "(B) Reneging",
            "(C) Jockeying",
            "(D) Alternating"
        ],
        answer: "(C)",
        explanation: "Jockeying refers to the act of switching between queues to join a shorter one."
    },
    {
        question: "Which of the following characteristics apply to the queuing system?",
        options: [
            "(A) customer population",
            "(B) arrival process",
            "(C) Both (A) and (B)",
            "(D) Neither (A) nor (B)"
        ],
        answer: "(C)",
        explanation: "A queuing system is defined by its input source (population), arrival pattern, service mechanism, etc."
    },
    {
        question: "Which of the following is not a key operating characteristic for a queuing system?",
        options: [
            "(A) Utilization factor",
            "(B) Percent idle time",
            "(C) Average time spent waiting in the system and queue",
            "(D) None of the above"
        ],
        answer: "(D)",
        explanation: "Utilization, idle time, and waiting time are all key performance metrics (operating characteristics) of a queuing system."
    },
    {
        question: "To proceed with the Modified Distribution (MODI) method algorithm for solving a transportation problem, the number of dummy allocations need to be added are:",
        options: [
            "(A) n+1",
            "(B) n-1",
            "(C) 2n-1",
            "(D) n"
        ],
        answer: "(A)",
        explanation: "If this refers to converting an Assignment problem (n x n) into a Transportation problem to solve via MODI, we have n allocations but need 2n-1. The difference (dummies needed) is n-1. In a general degenerate TP, we add allocations as needed. (User Note: Answer provided as A, explanation discusses context)"
    },
    {
        question: "Select the correct statement:",
        options: [
            "(A) EOQ is that quantity at which price paid by the buyer is minimum",
            "(B) If annual demand doubles with all other parameters remaining constant, the Economic Order Quantity is doubled",
            "(C) Total ordering cost equals holding cost",
            "(D) Stock out cost is never permitted"
        ],
        answer: "(C)",
        explanation: "At the Economic Order Quantity (EOQ), the total annual ordering cost theoretically equals the total annual holding cost."
    },
    {
        question: "If the order quantity (size of order) is increased,",
        options: [
            "(A) holding costs decrease and ordering costs increase",
            "(B) holding costs increase and ordering costs decrease",
            "(C) the total costs increase and then decrease",
            "(D) storage cost as well as stock-out cost increase"
        ],
        answer: "(B)",
        explanation: "Larger orders mean higher average inventory (Holding Cost increases) but fewer orders per year (Ordering Cost decreases)."
    },
    {
        question: "The activity cost corresponding to the crash time is called the:",
        options: [
            "(A) Critical time",
            "(B) Normal time",
            "(C) Cost slope",
            "(D) Crash cost"
        ],
        answer: "(D)",
        explanation: "The cost associated with completing an activity in its minimum possible time (Crash Time) is the Crash Cost."
    },
    {
        question: "In an Linear Programming Problem functions to be maximized or minimized are called:",
        options: [
            "(A) Constraints",
            "(B) Objective function",
            "(C) Basic solution",
            "(D) Feasible solution"
        ],
        answer: "(B)",
        explanation: "The function representing the goal (Profit/Cost) is the Objective Function."
    },
    {
        question: "If the primal problem has n constraints and m variables then the number of constraints in the dual problem is:",
        options: [
            "(A) mn",
            "(B) m+n",
            "(C) m-n",
            "(D) m/n"
        ],
        answer: "(Theoretical Answer: m)",
        explanation: "The number of constraints in the Dual is equal to the number of variables in the Primal (m). None of the provided options accurately represent 'm', suggesting a potential error in the question options provided in the exam."
    },
    {
        question: "The non-basic variables are called:",
        options: [
            "(A) Shadow cost",
            "(B) Opportunity cost",
            "(C) Slack variable",
            "(D) Surplus variable"
        ],
        answer: "(B)",
        explanation: "In the context of evaluating non-basic variables (empty cells in TP or non-basic cols in Simplex), the associated values are often referred to as Opportunity Costs or reduced costs."
    },
    {
        question: "An activity which does not consume neither any resource nor time is known as:",
        options: [
            "(A) Predecessor activity",
            "(B) Successor activity",
            "(C) Dummy activity",
            "(D) Activity"
        ],
        answer: "(C)",
        explanation: "A Dummy Activity is used in networks to show dependency relationships without consuming time or resources."
    },
    {
        question: "The difference between total and free float is:",
        options: [
            "(A) total",
            "(B) free",
            "(C) independent",
            "(D) interference"
        ],
        answer: "(D)",
        explanation: "Total Float = Free Float + Interfering Float. Thus, Difference = Interfering Float (or Interference)."
    },
    {
        question: "The assignment problem is always a ______ matrix.",
        options: [
            "(A) circle",
            "(B) square",
            "(C) rectangle",
            "(D) triangle"
        ],
        answer: "(B)",
        explanation: "Assignment problems require the number of sources to equal the number of destinations (n x n)."
    },
    {
        question: "The slack variables indicate:",
        options: [
            "(A) excess resource available.",
            "(B) shortage of resource",
            "(C) nil resource",
            "(D) idle resource"
        ],
        answer: "(A)",
        explanation: "A slack variable in a <= constraint represents the amount of unused (excess or idle) resource remaining."
    },
    {
        question: "The right hand side constant of a constraint in a primal problem appears in the corresponding dual as:",
        options: [
            "(A) a coefficient in the objective function",
            "(B) a right hand side constant of a function",
            "(C) an input output coefficient",
            "(D) a left hand side constraint coefficient variable"
        ],
        answer: "(A)",
        explanation: "The RHS vector (b) of the Primal becomes the cost vector of the Dual objective function."
    },
    {
        question: "Replace an item when:",
        options: [
            "(A) average cost upto date is equal to the current maintenance cost",
            "(B) average cost upto date is greater than the current maintenance cost",
            "(C) average cost upto date is less than the current maintenance cost",
            "(D) next year running cost is more than average cost of nth year"
        ],
        answer: "(D)",
        explanation: "The optimal replacement time is when the marginal cost (next year's running cost) exceeds the minimum average annual cost."
    },
    {
        question: "In time cost trade off function analysis:",
        options: [
            "(A) cost decreases linearly as time increases",
            "(B) cost increases linearly as time decreases",
            "(C) cost at normal time is zero",
            "(D) cost increases linearly as time increases"
        ],
        answer: "(A)",
        explanation: "Crashing (reducing time) increases cost. Therefore, extending time (moving towards normal time) decreases cost linearly (Cost Slope)."
    },
    {
        question: "The minimum number of lines covering all zeros in a reduced cost matrix of order n can be:",
        options: [
            "(A) at the most n",
            "(B) at the least n",
            "(C) n-1",
            "(D) n+1"
        ],
        answer: "(A)",
        explanation: "You never need more than n lines (one for each row or column) to cover all zeros. Optimality is reached when lines = n."
    },
    {
        question: "The qualitative approach to decision analysis relies on:",
        options: [
            "(A) Judgement",
            "(B) Intuition",
            "(C) Experience",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "Qualitative analysis uses subjective factors like judgment and experience."
    }
];
