const optimizationQuestions2024_2nd = [
    {
        question: "______ is the point in time that marks the beginning or ending of an activity.",
        options: [
            "(A) Event",
            "(B) Node",
            "(C) Activity",
            "(D) Dummy activity"
        ],
        answer: "(A)",
        explanation: "In network analysis (PERT/CPM), an event (represented by a node) signifies a specific point in time where an activity starts or finishes. It consumes no time or resources."
    },
    {
        question: "Optimal solution in LPP is:",
        options: [
            "(A) which maximizes or minimizes the objective function",
            "(B) which maximizes the objective function",
            "(C) which minimizes the objective function",
            "(D) which satisfies the non-negativity restrictions"
        ],
        answer: "(A)",
        explanation: "An optimal solution is a feasible solution that optimizes (maximizes or minimizes) the objective function value."
    },
    {
        question: "In graphical solution the feasible region is:",
        options: [
            "(A) where all the constraints are satisfied simultaneously",
            "(B) any one constraint is satisfied",
            "(C) only the first constraint is satisfied",
            "(D) any one of the above condition"
        ],
        answer: "(A)",
        explanation: "The feasible region is the intersection of all constraint areas, meaning every point in it satisfies all constraints at once."
    },
    {
        question: "In the context of the assignment problem, what does the term \"assignment\" refer to?",
        options: [
            "(A) The process of distributing tasks to resources",
            "(B) The evaluation of resource performance",
            "(C) The estimation of task completion time",
            "(D) The optimization of resource utilization"
        ],
        answer: "(A)",
        explanation: "The assignment problem specifically deals with allocating tasks to resources (one-to-one) to minimize cost or maximize profit."
    },
    {
        question: "Linear programming is:",
        options: [
            "(A) constraint optimization model",
            "(B) constraint decision making model",
            "(C) mathematical programming model",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "Linear programming is a mathematical technique used for constrained optimization and decision-making."
    },
    {
        question: "What do we apply in order to determine the optimum solution?",
        options: [
            "(A) LPP",
            "(B) VAM",
            "(C) MODI Method",
            "(D) None of the above"
        ],
        answer: "(C)",
        explanation: "In transportation problems, the **MODI** (Modified Distribution) method is used to test for optimality and determine the optimal solution. VAM gives an initial feasible solution."
    },
    {
        question: "A mixed strategy can be solved by:",
        options: [
            "(A) algebraic method",
            "(B) matrix method",
            "(C) graphical method",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "Games with mixed strategies can be solved using algebraic formulas, matrix arithmetic, or graphical methods problem."
    },
    {
        question: "In a network diagram activity is denoted by:",
        options: [
            "(A) node",
            "(B) arrow",
            "(C) triangle",
            "(D) none of these"
        ],
        answer: "(B)",
        explanation: "An arrow represents an **Activity** (which consumes time), while nodes represent events."
    },
    {
        question: "A minimization problem can be converted into a maximization problem by changing the sign of coefficients in the:",
        options: [
            "(A) Constraints",
            "(B) Objective Functions",
            "(C) Both (A) and (B)",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "We flip the signs of the objective function coefficients."
    },
    {
        question: "Which of the following is a type of linear programming problem?",
        options: [
            "(A) Diet Problem",
            "(B) Manufacturing Problem",
            "(C) Transportation Problem",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "All listed options are classic examples of LPP applications."
    },
    {
        question: "In simplex method the LPP has unbounded solution if the variable in the key column is:",
        options: [
            "(A) maximum",
            "(B) minimum",
            "(C) positive",
            "(D) negative"
        ],
        answer: "(D)",
        explanation: "An LPP is unbounded if, for the entering variable (key column), all constraint coefficients are non-positive (negative or zero), making it impossible to calculate a valid positive ratio to leave the basis."
    },
    {
        question: "In the standard form of an LPP if the objective function is of maximization type then the right hand side of the constraints should be:",
        options: [
            "(A) positive",
            "(B) negative",
            "(C) non-negative",
            "(D) zero"
        ],
        answer: "(C)",
        explanation: "In the standard form of LPP (Simplex), the Right Hand Side (RHS) values must always be non-negative."
    },
    {
        question: "If an activity has zero slack, it implies that:",
        options: [
            "(A) it lies on the critical path",
            "(B) it is a dummy activity",
            "(C) the project is progressing well",
            "(D) none of the above"
        ],
        answer: "(A)",
        explanation: "Critical activities have zero float (slack), meaning any delay in them will delay the entire project."
    },
    {
        question: "Float or slack analysis is useful for:",
        options: [
            "(A) Projects behind the schedule only",
            "(B) Projects ahead of the schedule only",
            "(C) Both (A) and (B)",
            "(D) None of the above"
        ],
        answer: "(C)",
        explanation: "Float analysis helps manage resources and scheduling for any project status, allowing rescheduling of non-critical tasks."
    },
    {
        question: "PERT is a tool for ______ and control time.",
        options: [
            "(A) Delaying",
            "(B) Planning",
            "(C) Both (A) and (B)",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "PERT (Program Evaluation and Review Technique) is a tool for **Planning** and Control."
    },
    {
        question: "Transportation problem is a special case of.",
        options: [
            "(A) LPP",
            "(B) assignment problem",
            "(C) None of the above",
            "(D) Both (A) and (B)"
        ],
        answer: "(A)",
        explanation: "The Transportation Problem is a specific type of Linear Programming Problem. (Note: Assignment is a special case of Transportation, not vice versa)."
    },
    {
        question: "In assignment problem if the number of column is greater than row then:",
        options: [
            "(A) dummy column is added",
            "(B) dummy row is added",
            "(C) row with cost 1 is added",
            "(D) column with cost 1 is added"
        ],
        answer: "(B)",
        explanation: "To make the matrix square, if Rows < Cols, we add a **Dummy Row** with zero costs."
    },
    {
        question: "For a minimisation Transportation Problem, the objective is to minimise:",
        options: [
            "(A) Profit",
            "(B) Cost",
            "(C) Solution",
            "(D) None of these"
        ],
        answer: "(B)",
        explanation: "The goal is to minimize the Total Transportation **Cost**."
    },
    {
        question: "Replacement is said to be necessary if:",
        options: [
            "(A) failure rate is increasing",
            "(B) failure cost is increasing",
            "(C) failure probability is increasing",
            "(D) any of these"
        ],
        answer: "(D)",
        explanation: "Increasing costs, risks, or failure rates indicate a need for replacement."
    },
    {
        question: "______ is an event oriented network diagram.",
        options: [
            "(A) CPM",
            "(B) PERT",
            "(C) Histogram",
            "(D) Ogive"
        ],
        answer: "(B)",
        explanation: "PERT is **Event-oriented**, while CPM is Activity-oriented."
    },
    {
        question: "Activities that cannot be started until one or more of the other activities are completed, are called:",
        options: [
            "(A) Dummy activities",
            "(B) Initial activities",
            "(C) Successor activities",
            "(D) Predecessor activities"
        ],
        answer: "(C)",
        explanation: "Successor activities depend on the completion of predecessor activities."
    },
    {
        question: "______ is activity oriented network diagram.",
        options: [
            "(A) CPM",
            "(B) PERT",
            "(C) Histogram",
            "(D) Ogive"
        ],
        answer: "(A)",
        explanation: "Critical Path Method (CPM) focuses on activities and their durations."
    },
    {
        question: "A LPP model does not contain:",
        options: [
            "(A) Decision",
            "(B) Constraints",
            "(C) Feasible solution",
            "(D) Spread Sheet"
        ],
        answer: "(D)",
        explanation: "A spreadsheet is a software tool, not a mathematical component of the LPP model itself (which contains variables, objective, constraints)."
    },
    {
        question: "The EST + activity duration =",
        options: [
            "(A) Earliest Finish Time",
            "(B) Latest Start Time",
            "(C) Latest Finish Time",
            "(D) None of these"
        ],
        answer: "(A)",
        explanation: "Earliest Start Time (EST) + Duration = Earliest Finish Time (EFT)."
    },
    {
        question: "______ is the latest time by which an activity can be finished without delaying the completion of the project?",
        options: [
            "(A) LST",
            "(B) LFT",
            "(C) EFT",
            "(D) EST"
        ],
        answer: "(B)",
        explanation: "**LFT** (Latest Finish Time) is the deadline for an activity to finish without delaying the project."
    },
    {
        question: "Network models have advantages in terms of project:",
        options: [
            "(A) planning",
            "(B) scheduling",
            "(C) controlling",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "Network analysis aids in all phases: planning, scheduling, and controlling."
    },
    {
        question: "The another term commonly used for activity slack time is :",
        options: [
            "(A) total float",
            "(B) free float",
            "(C) independent float",
            "(D) All of the above"
        ],
        answer: "(A)",
        explanation: "Activity slack is generally synonymous with **Total Float**."
    },
    {
        question: "Critical method is good for:",
        options: [
            "(A) small project only",
            "(B) large project only",
            "(C) small and large project equally",
            "(D) neither small nor large projects"
        ],
        answer: "(B)",
        explanation: "CPM is designed for complex, **large projects** (like construction) where time management is critical."
    },
    {
        question: "In a network diagram event is denoted by the symbol:",
        options: [
            "(A) arrow",
            "(B) circle",
            "(C) curve",
            "(D) straight line"
        ],
        answer: "(B)",
        explanation: "Events (nodes) are typically drawn as **Circles**."
    },
    {
        question: "______ is used for non-repetitive jobs.",
        options: [
            "(A) Queue",
            "(B) Replacement",
            "(C) CPM",
            "(D) PERT"
        ],
        answer: "(D)",
        explanation: "PERT deals with probabilistic time estimates, making it suitable for new, **non-repetitive** (R&D) projects."
    },
    {
        question: "Which of the following methods is used to verify the optimality of the current solution of the transportation problem?",
        options: [
            "(A) Least cost method",
            "(B) Vogel's Approximation method",
            "(C) Row minima method",
            "(D) Modified Distribution method"
        ],
        answer: "(D)",
        explanation: "The **MODI** (Modified Distribution) method is the standard optimality test."
    },
    {
        question: "This is not allowed in sequencing of n jobs on two machines:",
        options: [
            "(A) Passing",
            "(B) Repeating the job",
            "(C) Loading",
            "(D) One loaded on the machine it should be completed before removing from the machine."
        ],
        answer: "(A)",
        explanation: "**Passing** (changing the order of jobs between machines) is generally not allowed in standard flow-shop sequencing problems."
    },
    {
        question: "The occurrence of degeneracy while solving a transportation problem means that:",
        options: [
            "(A) Total supply equals total demand",
            "(B) The solution so obtained is not feasible",
            "(C) The few allocations become negative",
            "(D) None of the above"
        ],
        answer: "(D)",
        explanation: "Degeneracy occurs when the number of basic cells (allocations) is less than m+n-1. None of the provided options (A, B, C) accurately describe this."
    },
    {
        question: "To convert assignment problem into maximization problem:",
        options: [
            "(A) Deduct smallest element in the matrix from all other elements",
            "(B) All elements of the matrix are deducted from the highest elements in the matrix",
            "(C) Deduct smallest element in any row from all other elements of the row",
            "(D) Deduct all elements of the row from highest element in that row"
        ],
        answer: "(B)",
        explanation: "To solve a maximization assignment problem, convert the profit matrix into a \"regret\" (loss) matrix by subtracting all elements from the **highest element** in the matrix."
    },
    {
        question: "If there are 'm' original variables and 'n' introduced variables, then there will be ______ columns in the simplex table:",
        options: [
            "(A) m+n",
            "(B) M-n",
            "(C) m",
            "(D) n"
        ],
        answer: "(A)",
        explanation: "The simplex table contains a column for every variable (original decision variables + slack/surplus/artificial). Total = m+n."
    },
    {
        question: "Operations research is the application of ______ methods to arrive at the optimal solutions to the problems.",
        options: [
            "(A) economical",
            "(B) scientific",
            "(C) Both (A) and (B)",
            "(D) artistic"
        ],
        answer: "(B)",
        explanation: "OR is defined as the application of **scientific methods** to decision-making."
    },
    {
        question: "Feasible solution satisfies:",
        options: [
            "(A) Only constraints",
            "(B) Only non-negative restriction",
            "(C) Both (A) and (B)",
            "(D) [A], [B] and Optimum solution"
        ],
        answer: "(C)",
        explanation: "A feasible solution must satisfy all structural constraints and non-negativity restrictions."
    },
    {
        question: "Minimize Z =",
        options: [
            "(A) -maximize(Z)",
            "(B) -maximize(-Z)",
            "(C) maximize(-Z)",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "Mathematically, min(Z) = -max(-Z)."
    },
    {
        question: "Operations research was known as an ability to win a war without really going in to",
        options: [
            "(A) Battle field",
            "(B) Fighting",
            "(C) The opponent",
            "(D) Both (A) and (B)"
        ],
        answer: "(B)",
        explanation: "A common quote about OR (originating from WWII) is \"Winning the war without going into **fighting**\"."
    },
    {
        question: "If there exists a saddle point for a given problem it, implies that the players are using ______ strategies.",
        options: [
            "(A) Pure",
            "(B) Mixed",
            "(C) Optimal",
            "(D) Pure and Mixed"
        ],
        answer: "(A)",
        explanation: "A saddle point indicates that the game has a stable solution using **Pure strategies**."
    },
    {
        question: "The size of the payoff matrix of a game can be reduced by using the principle of:",
        options: [
            "(A) game inversion",
            "(B) rotation reduction",
            "(C) dominance",
            "(D) game transpose"
        ],
        answer: "(C)",
        explanation: "The **Dominance Principle** allows deleting rows/columns that are inferior to others, reducing the matrix size."
    },
    {
        question: "Find Strategy of the player in the given pay-off matrix (3x3).",
        options: [
            "(A) A2, B2",
            "(B) A3, B3",
            "(C) A1, B1",
            "(D) None"
        ],
        answer: "(C)",
        explanation: "Row Minima: Row 1 (-2), Row 2 (-6), Row 3 (-8). Maximin = -2 (Row 1). Col Maxima: Col 1 (-2), Col 2 (20), Col 3 (-2). Minimax = -2. Saddle Point at intersection (A1, B1)."
    },
    {
        question: "Find Solution of game theory problem using saddle point (4x4).",
        options: [
            "(A) 8",
            "(B) 12",
            "(C) 40",
            "(D) 2"
        ],
        answer: "(B)",
        explanation: "Row Minima: R1(12). Maximin = 12. Col Maxima: C3(12). Minimax = 12. Saddle point value = 12."
    },
    {
        question: "The Penalty in VAM represents difference between ______ cost of respective row/column.",
        options: [
            "(A) Two largest",
            "(B) Largest and Smallest",
            "(C) Smallest Two",
            "(D) None of the above"
        ],
        answer: "(C)",
        explanation: "VAM penalties are calculated as the difference between the **Two Smallest** costs in each row/column."
    },
    {
        question: "In maximization case of transportation problem, we convert into minimization by subtracting all the elements from:",
        options: [
            "(A) zero",
            "(B) one",
            "(C) highest element",
            "(D) lowest element"
        ],
        answer: "(C)",
        explanation: "Subtracting all elements from the **highest element** creates a relative loss matrix suitable for minimization algorithms."
    },
    {
        question: "Pessimistic time and optimistic time of completion of an activity are given as 10 days and 4 days respectively, the variance of the activity will be:",
        options: [
            "(A) 1",
            "(B) 6",
            "(C) 12",
            "(D) 18"
        ],
        answer: "(A)",
        explanation: "Variance = ((b-a)/6)^2 = ((10-4)/6)^2 = 1."
    },
    {
        question: "An LPP deals with problems having only:",
        options: [
            "(A) single objective",
            "(B) multiple objective",
            "(C) two objective",
            "(D) none of these"
        ],
        answer: "(A)",
        explanation: "Standard LPP deals with optimizing a **single linear objective function**."
    },
    {
        question: "In transportation problem the preferred method of obtaining either optimal or very close to the optimal solution is:",
        options: [
            "(A) north west corner",
            "(B) lowest cost",
            "(C) vogel approximation method",
            "(D) simplex method"
        ],
        answer: "(C)",
        explanation: "**VAM** (Vogel's Approximation Method) typically yields an initial solution that is very close to, or sometimes is, the optimal solution."
    },
    {
        question: "In north west corner rule if the demand in the column is satisfied one must move to the:",
        options: [
            "(A) left cell in the next column",
            "(B) right cell in the next column",
            "(C) left cell in the next row",
            "(D) right cell in the next row"
        ],
        answer: "(B)",
        explanation: "If a column demand is satisfied, we move to the next column (right)."
    },
    {
        question: "In transportation problem the improved solution of the initial basic feasible solution is :",
        options: [
            "(A) basic solution",
            "(B) optimal solution",
            "(C) degenerate solution",
            "(D) non-degenerate solution"
        ],
        answer: "(B)",
        explanation: "Improving the initial solution iteratively leads to the **Optimal Solution**."
    },
    {
        question: "The group replacement policy is suitable for identical low cost items which are likely to",
        options: [
            "(A) Fail over a period of time",
            "(B) Fail suddenly",
            "(C) Fail completely and suddenly",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "Group replacement is used for items like light bulbs that fail suddenly."
    },
    {
        question: "If ui and vj are row and column numbers respectively, then the implied cost is given by:",
        options: [
            "(A) ui+vj",
            "(B) ui-vj",
            "(C) ui.vj",
            "(D) ui/vj"
        ],
        answer: "(A)",
        explanation: "For occupied cells, Cost Cij = ui + vj. This sum is the implied cost."
    },
    {
        question: "Which of the following method cannot be used to solve transportation problem?",
        options: [
            "(A) North-West corner rule",
            "(B) Matrix minima method",
            "(C) Vogel's Approximation method",
            "(D) Graphical method"
        ],
        answer: "(D)",
        explanation: "Graphical method is for 2-variable LPP, not for standard Transportation problems."
    },
    {
        question: "In ______ method consider the least cost and next to least cost for solving transportation problem.",
        options: [
            "(A) North-west corner",
            "(B) Matrix minima",
            "(C) Vogel's Approximation",
            "(D) Row Minima method"
        ],
        answer: "(C)",
        explanation: "This refers to the \"Penalty\" calculation in **Vogel's Approximation Method**."
    },
    {
        question: "The minimum number of line covering all zeros in a reduced cost matrix of order n can be",
        options: [
            "(A) At least n",
            "(B) At most n",
            "(C) n-1",
            "(D) n+1"
        ],
        answer: "(B)",
        explanation: "You never need more than n lines to cover the zeros."
    },
    {
        question: "The term idle time is used in",
        options: [
            "(A) LPP",
            "(B) Assignment Problem",
            "(C) Sequencing Problem",
            "(D) Transportation Problem"
        ],
        answer: "(C)",
        explanation: "Idle time (machine waiting time) is a key concept in **Sequencing Problems**."
    },
    {
        question: "If a primal LP problem has finite solution, then the dual LP problem should have:",
        options: [
            "(A) Finite solution",
            "(B) Infeasible solution",
            "(C) Unbounded solution",
            "(D) None of these"
        ],
        answer: "(A)",
        explanation: "Strong Duality Theorem states that if the Primal has a finite optimal solution, the Dual also has a **Finite optimal solution**."
    },
    {
        question: "The objective of network analysis is:",
        options: [
            "(A) Minimize total project duration",
            "(B) Minimize total project cost",
            "(C) Minimize product delays, interruption and conflicts",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "Network analysis (PERT/CPM) aims to optimize time, cost, and resource management."
    },
    {
        question: "If the feasible region of a LPP is empty, the solution is :",
        options: [
            "(A) Infeasible",
            "(B) Unbounded",
            "(C) Alternative",
            "(D) None of the above"
        ],
        answer: "(A)",
        explanation: "An empty feasible region means there is no solution that satisfies all constraints, i.e., **Infeasible**."
    },
    {
        question: "Any column or row of a simplex table is called a:",
        options: [
            "(A) Vector",
            "(B) Key column",
            "(C) Key Raw",
            "(D) None of these"
        ],
        answer: "(A)",
        explanation: "Columns in the simplex tableau are often referred to as vectors."
    },
    {
        question: "In simplex method, we add ______ variables in the case of '='",
        options: [
            "(A) Slack Variable",
            "(B) Surplus Variable",
            "(C) Artificial Variable",
            "(D) None of the above"
        ],
        answer: "(C)",
        explanation: "Artificial variables are added to equality constraints to provide an initial basis."
    },
    {
        question: "Dual of the dual is:",
        options: [
            "(A) Primal",
            "(B) Dual",
            "(C) Alternative",
            "(D) None of the above"
        ],
        answer: "(A)",
        explanation: "Fundamental theorem: Dual of Dual is **Primal**."
    },
    {
        question: "In replacement analysis the maintenance cost is a function of:",
        options: [
            "(A) time",
            "(B) resale value",
            "(C) initial investment",
            "(D) None of these"
        ],
        answer: "(A)",
        explanation: "Maintenance cost typically increases with **time** (age of the asset)."
    },
    {
        question: "The shortest possible completion time of an activity in PERT is called ______ time.",
        options: [
            "(A) pessimistic",
            "(B) optimistic",
            "(C) most likely",
            "(D) expected"
        ],
        answer: "(B)",
        explanation: "**Optimistic time** is the minimum time required if everything goes perfectly."
    },
    {
        question: "The longest possible completion time of an activity in PERT is called ______ time.",
        options: [
            "(A) pessimistic",
            "(B) optimistic",
            "(C) most likely",
            "(D) expected"
        ],
        answer: "(A)",
        explanation: "**Pessimistic time** assumes maximum problems/delays."
    },
    {
        question: "If a is the optimistic time, b is the pessimistic time and m is most likely time of an activity, the expected time of the activity, is:",
        options: [
            "(A) a+m+b/6",
            "(B) a+2m+b/6",
            "(C) a+4m+b/6",
            "(D) None of these"
        ],
        answer: "(C)",
        explanation: "The standard formula is (a + 4m + b) / 6."
    },
    {
        question: "If a job is having minimum processing time under both the machines, then the job is placed in:",
        options: [
            "(A) any one position",
            "(B) available position",
            "(C) available first position",
            "(D) both first and last position"
        ],
        answer: "(A)",
        explanation: "It's a tie. The job can arbitrarily be placed first or last."
    },
    {
        question: "In graphical solution of solving LPP to convert inequalities into equations, we:",
        options: [
            "(A) use slack variables",
            "(B) use surplus variables",
            "(C) use artificial variables",
            "(D) simply assume them to equations"
        ],
        answer: "(D)",
        explanation: "In graphical method, we plot the boundary lines by treating inequalities as equations."
    },
    {
        question: "Using the Johnson rule find the right sequence of the job: A(2,5), B(9,7), C(8,12), D(10,3), E(4,9), F(11,1)",
        options: [
            "(A) AECFBD",
            "(B) ABDCEF",
            "(C) A E C B D F",
            "(D) ADBCEF"
        ],
        answer: "(C)",
        explanation: "Using Johnson's algorithm: Min is F(1) -> End. Next Min A(2) -> Start. Next Min D(3) -> End (before F). Next Min E(4) -> Start (after A). Next Min B(7) -> End (before D). Last C. Sequence: A-E-C-B-D-F."
    },
    {
        question: "A game is said to be fair if:",
        options: [
            "(A) both upper and lower values of the game are the same and zero",
            "(B) upper and lower values of the game are not equal",
            "(C) upper value is more than the lower value of the game",
            "(D) None of these"
        ],
        answer: "(A)",
        explanation: "A fair game has a value of **Zero**."
    },
    {
        question: "What happens when maximin and minimax values of the game are same?",
        options: [
            "(A) no solution exists",
            "(B) solution is mixed",
            "(C) saddle point exist",
            "(D) None of these"
        ],
        answer: "(C)",
        explanation: "Maximin = Minimax implies the existence of a **Saddle Point** (Pure Strategy)."
    },
    {
        question: "Operations research was known as an ability to win a war without really going in to",
        options: [
            "(A) Battle field",
            "(B) Fighting",
            "(C) The opponent",
            "(D) Both (A) and (B)"
        ],
        answer: "(B)",
        explanation: "\"Winning the war without going into **fighting**\"."
    },
    {
        question: "In a pure strategy game:",
        options: [
            "(A) any strategy may be selected arbitrarily",
            "(B) a particular strategy is selected by each player",
            "(C) both players select their optimal strategy",
            "(D) None of these"
        ],
        answer: "(B)",
        explanation: "In pure strategy, players consistently choose one specific strategy."
    },
    {
        question: "What is the rule for the earliest start time?",
        options: [
            "(A) It compares the activity's start time to that of a successor activity",
            "(B) It compares the activity's end time to that of a previous activity",
            "(C) It specifies when a project may begin",
            "(D) It establishes the start date for a project"
        ],
        answer: "(D)",
        explanation: "Conceptually, it establishes when activities *can* start."
    },
    {
        question: "What is the definition of a critical path?",
        options: [
            "(A) It's a path that connects the starting and ending nodes",
            "(B) It combines all of the paths",
            "(C) It is the shortest route",
            "(D) It is the most direct route"
        ],
        answer: "(A)",
        explanation: "Of the provided options, (A) is topologically true. The definition is **Longest Duration Path**, but among options, (A) is the only reasonable structural description."
    },
    {
        question: "What is the primary objective of job sequencing with two machines?",
        options: [
            "(A) Minimizing the total processing time",
            "(B) Maximizing the number of jobs completed",
            "(C) Equalizing the workload on both machines",
            "(D) Prioritizing high-priority jobs"
        ],
        answer: "(A)",
        explanation: "The goal is to minimize the **Total Elapsed Time** (Makespan)."
    },
    {
        question: "To formulate a problem for solution by the simplex method, we must add artificial variable to:",
        options: [
            "(A) only equality constraints",
            "(B) only > constraints",
            "(C) Both (A) and (B)",
            "(D) None of the options"
        ],
        answer: "(C)",
        explanation: "Artificial variables are needed for both = and > constraints to form an initial identity basis."
    },
    {
        question: "In Degenerate solution value of objective function",
        options: [
            "(A) increases infinitely",
            "(B) basic variables are nonzero",
            "(C) decreases infinitely",
            "(D) One or more basic variables are zero"
        ],
        answer: "(D)",
        explanation: "Degeneracy is defined by one or more basic variables having a value of **zero**."
    },
    {
        question: "Consider the linear equation 2x + 3y + 4z + 5w = 10. How many basic and non-basic variables are defined by this equation?",
        options: [
            "(A) One variable is basic, three variables are non-basic",
            "(B) Two variables are basic, two variables are non-basic",
            "(C) Three variables are basic, one variable is non-basic",
            "(D) All four variables are basic"
        ],
        answer: "(A)",
        explanation: "For 1 equation with 4 variables, we set n-m (4-1=3) variables to zero (non-basic) to solve for the 1 basic variable."
    },
    {
        question: "In the optimal simplex table Zj - Cj = 0 value indicates:",
        options: [
            "(A) unbounded solution",
            "(B) cycling",
            "(C) alternative solution",
            "(D) None of these"
        ],
        answer: "(C)",
        explanation: "If Zj - Cj = 0 for a non-basic variable in the optimal table, it indicates **Alternative Optimal Solutions**."
    },
    {
        question: "If all incoming variable column is negative then the solution is:",
        options: [
            "(A) Unbounded solution",
            "(B) Infeasible solution",
            "(C) Feasible Solution",
            "(D) None of these"
        ],
        answer: "(A)",
        explanation: "If the pivot column has no positive entries, the variable can increase indefinitely, leading to an **Unbounded** solution."
    },
    {
        question: "In the simplex method the variable enters the basis if",
        options: [
            "(A) Cj - Zj < 0",
            "(B) Cj - Zj > 0",
            "(C) Cj - Zj = 0",
            "(D) Zj - Cj > 0"
        ],
        answer: "(B)",
        explanation: "For maximization, if Cj - Zj > 0 (or Zj - Cj < 0), the variable can improve the solution and enters the basis."
    },
    {
        question: "For the constraint of greater than equal to type we make use of",
        options: [
            "(A) slack",
            "(B) artificial",
            "(C) surplus",
            "(D) basic"
        ],
        answer: "(C)",
        explanation: "We subtract a **Surplus** variable."
    },
    {
        question: "If all xij values in the incoming variable column of the simplex table are negative, then :",
        options: [
            "(A) solution is unbounded",
            "(B) there exist no solution",
            "(C) there are multiple solution",
            "(D) None of these"
        ],
        answer: "(A)",
        explanation: "Unbounded solution."
    },
    {
        question: "Operation research approach is :",
        options: [
            "(A) Multi-disciplinary",
            "(B) Intuitive",
            "(C) Artificial",
            "(D) All of the above"
        ],
        answer: "(A)",
        explanation: "OR teams are **Multi-disciplinary**."
    },
    {
        question: "In graphical method the LPP has unbounded solution if the solution space has :",
        options: [
            "(A) no upper boundary",
            "(B) no lower boundary",
            "(C) no boundary in the first quadrant",
            "(D) None of the above"
        ],
        answer: "(A)",
        explanation: "An open region in the direction of optimization (usually maximization) means **No upper boundary**."
    },
    {
        question: "While drawing the network diagram for each activity project we should look:",
        options: [
            "(A) What activities precede this activity",
            "(B) What activities follow this activity",
            "(C) What activity can concurrently take place with this activity",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "All logical dependencies must be checked."
    },
    {
        question: "A transportation problem is said to be balanced if",
        options: [
            "(A) quantity demanded < quantity supplied",
            "(B) quantity demanded > quantity supplied",
            "(C) quantity demanded != quantity supplied",
            "(D) quantity demanded = quantity supplied"
        ],
        answer: "(D)",
        explanation: "Balanced means Supply = Demand."
    },
    {
        question: "In the transportation problem if the current supply of the warehouses exceeds the current demand of the markets then,",
        options: [
            "(A) fictitious warehouse is introduced",
            "(B) fictitious market is introduced",
            "(C) decrease the supply of existing warehouse",
            "(D) the demand of existing market"
        ],
        answer: "(B)",
        explanation: "Supply > Demand means surplus. We add a dummy (fictitious) **Market** (Destination) to absorb the excess."
    },
    {
        question: "In transportation problem if total supply > total demand we add :",
        options: [
            "(A) dummy row with cost 0",
            "(B) dummy column with cost 0",
            "(C) dummy row with cost 1",
            "(D) dummy column with cost 1"
        ],
        answer: "(B)",
        explanation: "Dummy column (destination)."
    },
    {
        question: "In least cost method the allocation is done by selecting",
        options: [
            "(A) upper left corner",
            "(B) upper right corner",
            "(C) middle cell in the transportation table",
            "(D) cell with the lowest cost"
        ],
        answer: "(D)",
        explanation: "LCM selects the cell with the **lowest unit cost**."
    },
    {
        question: "An assignment problem is considered as a particular case of a transportation problem because :",
        options: [
            "(A) the number of rows equals columns",
            "(B) all xij = 0 or 1",
            "(C) Both (A) and (B)",
            "(D) None of these"
        ],
        answer: "(A)",
        explanation: "It is a square TP (Rows = Cols)."
    },
    {
        question: "Which of the following is a characteristic of a dual problem:",
        options: [
            "(A) Dual of a dual is primal",
            "(B) If dual has a finite optimal solution, then the primal also has finite optimal solution",
            "(C) If dual has no feasible solution, then the primal also has no feasible solution",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "Options A and B are correct properties. C is often associated."
    },
    {
        question: "When all the players of the game follow their optimal strategies, then the expected pay off of the game is called",
        options: [
            "(A) Gain of the game",
            "(B) Loss of the game",
            "(C) Value of the game",
            "(D) None of these"
        ],
        answer: "(C)",
        explanation: "The expected payoff is the **Value of the game**."
    },
    {
        question: "Before formulating a formal LP model, it is better to:",
        options: [
            "(A) Verbally identify decision variables",
            "(B) Express the objective function in words",
            "(C) Express each constraint in words",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "Defining the problem verbally is the first step in formulation."
    },
    {
        question: "What is the primary objective of job sequencing with two machines?",
        options: [
            "(A) Minimizing the total processing time",
            "(B) Maximizing the number of jobs completed",
            "(C) Equalizing the workload on both machines",
            "(D) Prioritizing high-priority jobs"
        ],
        answer: "(A)",
        explanation: "Goal is to minimize **Total Elapsed Time** (Makespan)."
    },
    {
        question: "In ______ models, everything is defined and the results are certain.",
        options: [
            "(A) Probabilistic",
            "(B) Deterministic",
            "(C) Both (A) and (B)",
            "(D) None of these"
        ],
        answer: "(B)",
        explanation: "**Deterministic** models assume certainty."
    },
    {
        question: "The key column indicates",
        options: [
            "(A) outgoing variable",
            "(B) incoming variable",
            "(C) independent variable",
            "(D) dependent variable"
        ],
        answer: "(B)",
        explanation: "The key column identifies the **Incoming Variable**."
    },
    {
        question: "If a machine becomes old then the failure rate expected will be :",
        options: [
            "(A) constant",
            "(B) increasing",
            "(C) decreasing",
            "(D) we cannot say"
        ],
        answer: "(B)",
        explanation: "Wear-out phase leads to **increasing** failure rate."
    },
    {
        question: "The two forms of LPP are:",
        options: [
            "(A) standard form and canonical form",
            "(B) standard form and general form",
            "(C) matrix form and canonical form",
            "(D) matrix form and standard form"
        ],
        answer: "(A)",
        explanation: "The standard theoretical forms are **Canonical** and **Standard**."
    }
];
