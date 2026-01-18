const optimizationQuestions2023 = [
    {
        question: "The assignment problem is a special case of transportation problem in which:",
        options: [
            "(A) Number of origins are less than the number of destinations.",
            "(B) Number of origins are greater than the number of destinations.",
            "(C) Number of origins are greater than or equal to the number of destinations.",
            "(D) Number of origins equals the number of destinations."
        ],
        answer: "(D)",
        explanation: "An assignment problem is a special transportation problem where the number of sources (origins) must equal the number of destinations (a square matrix)."
    },
    {
        question: "The large negative opportunity cost value in an unused cell in a transportation table is chosen to improve the current solution because:",
        options: [
            "(A) It represents per unit cost reduction",
            "(B) It represents per unit cost improvement",
            "(C) It ensure no rim requirement violation",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "A large negative value in the opportunity cost (net evaluation) indicates potential savings or improvement in the objective function if allocations are made there."
    },
    {
        question: "If an opportunity cost value is used for an unused cell to test optimality, it should be:",
        options: [
            "(A) Equal to zero",
            "(B) Most negative number",
            "(C) Most positive number",
            "(D) Any value"
        ],
        answer: "(B)",
        explanation: "In a minimization problem, if any opportunity cost is negative, the solution is not optimal. The most negative value indicates the entering variable for improvement."
    },
    {
        question: "Queuing theory deals with the problem of:",
        options: [
            "(A) Material handling",
            "(B) Reducing waiting time or idle time",
            "(C) Better utilization of man services",
            "(D) Effective use of machines"
        ],
        answer: "(B)",
        explanation: "Queuing theory analyzes waiting lines to minimize the costs associated with waiting and idle service resources."
    },
    {
        question: "______ is that element of the simplex table which is both in the key row and key column.",
        options: [
            "(A) Key element",
            "(B) Pivot element",
            "(C) Both (A) and (B)",
            "(D) None of the above"
        ],
        answer: "(C)",
        explanation: "The intersection of the key row and key column is called the Pivot Element or Key Element."
    },
    {
        question: "Traffic intensity is computed by using the formula:",
        options: [
            "(A) $\\lambda / \\mu$",
            "(B) $\\mu / \\lambda$",
            "(C) $\\lambda - \\mu$",
            "(D) $\\mu - \\lambda$"
        ],
        answer: "(A)",
        explanation: "Traffic intensity (or utilization factor, $\\rho$) is defined as the arrival rate ($\\lambda$) divided by the service rate ($\\mu$)."
    },
    {
        question: "Matrix Minima Method to find initial feasible solution to a TP is also called:",
        options: [
            "(A) NWCM",
            "(B) LCM",
            "(C) VAM",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "Matrix Minima Method is another name for the Least Cost Method (LCM)."
    },
    {
        question: "Traffic intensity in Queuing Theory is also called:",
        options: [
            "(A) Service factor",
            "(B) Arrival factor",
            "(C) Utilisation factor",
            "(D) None of the above"
        ],
        answer: "(C)",
        explanation: "Traffic intensity represents the server utilization (Utilisation factor)."
    },
    {
        question: "A customer's behaviour of leaving the queue due to impatience is called:",
        options: [
            "(A) Jockying",
            "(B) Reneging",
            "(C) Collusion",
            "(D) Balking"
        ],
        answer: "(B)",
        explanation: "Reneging occurs when a customer joins the queue but leaves before being served due to impatience."
    },
    {
        question: "Commonly assumed probability distribution of service pattern are:",
        options: [
            "(A) Poisson distribution",
            "(B) Exponential distribution",
            "(C) Erlang distribution",
            "(D) Both (B) and (C)"
        ],
        answer: "(B)",
        explanation: "Service times are typically modeled using the Exponential distribution."
    },
    {
        question: "A LPP model does not contain:",
        options: [
            "(A) Decision",
            "(B) Constraints",
            "(C) Feasible solution",
            "(D) Spreadsheet"
        ],
        answer: "(D)",
        explanation: "An LPP model consists of decision variables, constraints, and an objective function. A spreadsheet is a tool, not a component of the mathematical model itself."
    },
    {
        question: "In sequencing if the smallest time belong to machine-1, then that job has to be placed ______ of the sequence.",
        options: [
            "(A) in the middle",
            "(B) in the starting",
            "(C) at end",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "According to Johnson's Rule, if the minimum processing time is on the first machine (M1), the job is processed first (at the start)."
    },
    {
        question: "Replacement is said to be necessary if:",
        options: [
            "(A) Failure rate is increasing.",
            "(B) Failure cost is increasing.",
            "(C) Failure probability is increasing.",
            "(D) Any of the above"
        ],
        answer: "(D)",
        explanation: "Increasing failure rate, cost, or probability are all valid reasons to consider replacement."
    },
    {
        question: "In the formula of Economic Order Quantity, the alphabet 'O' stands for:",
        options: [
            "(A) Ordering Level",
            "(B) Ordering Cost",
            "(C) Ordering and Carrying Cost",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "In the EOQ formula, 'O' typically represents Ordering Cost per order."
    },
    {
        question: "What is the first approach in optimization methods?",
        options: [
            "(A) Theory of bending",
            "(B) Theory of layout",
            "(C) Theory of elongation",
            "(D) Theory of stress"
        ],
        answer: "(D)",
        explanation: "In the historical context of engineering optimization, design problems involving stress and strain (like Galileo's beam analysis) were among the first applications."
    },
    {
        question: "Initial feasible solution to a transportation problem can be found out by:",
        options: [
            "(A) VAM",
            "(B) MODI Method",
            "(C) Both (A) and (B)",
            "(D) None of the above"
        ],
        answer: "(A)",
        explanation: "VAM (Vogel's Approximation Method) finds an initial solution. MODI is for optimality testing."
    },
    {
        question: "It is assumed that maintenance cost mostly depends on :",
        options: [
            "(A) Calendar age",
            "(B) Running age",
            "(C) Manufacturing date",
            "(D) User's age"
        ],
        answer: "(B)",
        explanation: "Maintenance costs usually increase as the Running age (usage) of the machine increases."
    },
    {
        question: "The coefficient of an artificial variable in the objective function of penalty method are always assumed to be:",
        options: [
            "(A) 0",
            "(B) 1",
            "(C) M",
            "(D) -M"
        ],
        answer: "(D)",
        explanation: "In Big-M method, artificial variables are assigned a very large penalty coefficient (-M for max, +M for min)."
    },
    {
        question: "The assignment problem will have alternate solutions when the total opportunity cost matrix has:",
        options: [
            "(A) at least one zero in each row and column",
            "(B) when all rows have two zeros",
            "(C) when there is a tie between zero opportunity cost cells",
            "(D) if two diagonal elements are zeros."
        ],
        answer: "(C)",
        explanation: "Alternate solutions arise when the zero assignment is not unique (e.g., a \"tie\" or loop allows multiple valid sets of allocations)."
    },
    {
        question: "The average arrival rate in a single server queuing system is 10 customers per hour and average service rate is 15 customers per hour. The average time that a customer must wait before it is taken up for service shall be ______ minutes.",
        options: [
            "(A) 6",
            "(B) 8",
            "(C) 10",
            "(D) 12"
        ],
        answer: "(B)",
        explanation: "Wait time in queue Wq = $\\lambda / (\\mu (\\mu - \\lambda)) = 10 / (15 * 5) = 10/75$ hours = 8 minutes."
    },
    {
        question: "In the optimal simplex table, $Z_j - C_j = 0$ value indicates:",
        options: [
            "(A) alternative solution",
            "(B) bounded solution",
            "(C) infeasible solution",
            "(D) unbounded solution"
        ],
        answer: "(A)",
        explanation: "If the net evaluation ($Z_j - C_j$) is zero for a non-basic variable in the optimal table, it indicates that entering that variable would not change the Z value, implying Alternative Optimal Solutions exist."
    },
    {
        question: "When $d = 2000$, holding cost = 1.20, set-up $C_3 = 400$, **Order Quantity is:**",
        options: [
            "(A) 3465",
            "(B) 3750",
            "(C) 3500",
            "(D) 4000"
        ],
        answer: "(A)",
        explanation: "EOQ = $\\sqrt{2 * 2000 * 400 / 1.20}$."
    },
    {
        question: "When the probability of failure reduces gradually, the failure mode is said to be :",
        options: [
            "(A) Regressive",
            "(B) Retrogressive",
            "(C) Progressive",
            "(D) Recursive"
        ],
        answer: "(A)",
        explanation: "Regressive failure means failure probability decreases with time (common in early \"infant mortality\" phase)."
    },
    {
        question: "When money value changes with time at 10%, then PWF for first year is:",
        options: [
            "(A) 1",
            "(B) 0.909",
            "(C) 0.852",
            "(D) 0.9"
        ],
        answer: "(B)",
        explanation: "$1 / (1 + 0.10)^1 = 0.909$."
    },
    {
        question: "The unit of traffic intensity is:",
        options: [
            "(A) Poisson",
            "(B) Markow",
            "(C) Erlang",
            "(D) Kendall"
        ],
        answer: "(C)",
        explanation: "Traffic intensity is measured in Erlangs."
    },
    {
        question: "If the operating characteristics of a queue are dependent on time, then it is said to be:",
        options: [
            "(A) Transient state",
            "(B) Busy state",
            "(C) Steady state",
            "(D) Explosive state"
        ],
        answer: "(A)",
        explanation: "Transient state means the system behavior evolves over time. Steady state is when it becomes independent of time."
    },
    {
        question: "As per queue discipline is the following is not the negative behavior of customer:",
        options: [
            "(A) Balking",
            "(B) Reneging",
            "(C) Boarding",
            "(D) Collusion"
        ],
        answer: "(C)",
        explanation: "Balking, Reneging, and Collusion are negative. \"Boarding\" implies entering service (normal behavior)."
    },
    {
        question: "The method used to solve LPP with use of artificial variables is called:",
        options: [
            "(A) Dual Simplex",
            "(B) Graphical",
            "(C) Big-M",
            "(D) Transportation Problem"
        ],
        answer: "(C)",
        explanation: "The Big-M Method is specifically designed to handle artificial variables in Simplex."
    },
    {
        question: "Which of the followings is an assumption of Linear Programming Technique?",
        options: [
            "(A) Divisibility",
            "(B) Additivity",
            "(C) Proportionality",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "All listed items are fundamental assumptions of LP."
    },
    {
        question: "During an iteration while moving from one solution to the next, degeneracy may occur when:",
        options: [
            "(A) The closed path indicates a diagonal move",
            "(B) Two or more occupied cells are on the closed path but neither of them represents a corner of the path.",
            "(C) Two or more occupied cells on the closed path with minus sign are tied for lowest circled value",
            "(D) Either of the above"
        ],
        answer: "(C)",
        explanation: "In the Stepping Stone/MODI method, degeneracy occurs if there is a tie for the minimum value among the donor cells (cells with minus sign), causing multiple variables to become zero simultaneously."
    },
    {
        question: "The smallest quantity is chosen at the corners of the closed path with negative sign to be assigned at unused cell because:",
        options: [
            "(A) It improve the total cost",
            "(B) It does not disturb rim conditions",
            "(C) It ensure feasible solution",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "Subtracting/Adding the min value maintains the supply/demand balance (rim conditions) and ensures non-negativity (feasibility)."
    },
    {
        question: "The occurrence of degeneracy while solving a transportation problem means that:",
        options: [
            "(A) total supply equals total demand",
            "(B) the solution so obtained is not feasible",
            "(C) the few allocations become negative",
            "(D) None of the above"
        ],
        answer: "(D)",
        explanation: "Degeneracy means the number of occupied cells is less than m + n - 1."
    },
    {
        question: "In maximization problem, optimal solution occurring at corner point yields the:",
        options: [
            "(A) mean values of z",
            "(B) highest value of z",
            "(C) lowest value of z",
            "(D) mid values of z"
        ],
        answer: "(B)",
        explanation: "In maximization, the optimal solution corresponds to the highest value of the objective function Z."
    },
    {
        question: "Column in simplex initial table used to represent new basic variable is classified as:",
        options: [
            "(A) column variable",
            "(B) key column",
            "(C) key row",
            "(D) row variable"
        ],
        answer: "(B)",
        explanation: "The Key Column (Pivot Column) determines the entering variable (new basic variable)."
    },
    {
        question: "In simplex method, slack, surplus and artificial variables are restricted to be:",
        options: [
            "(A) multiplied",
            "(B) negative",
            "(C) non-negative",
            "(D) divided"
        ],
        answer: "(C)",
        explanation: "Non-negativity constraint applies to all variables in Simplex."
    },
    {
        question: "In simplex method basic solution set as n - m = 0, all variables other than basic are classified as:",
        options: [
            "(A) constant variable",
            "(B) non-positive variables",
            "(C) basic variables",
            "(D) non-basic variable"
        ],
        answer: "(D)",
        explanation: "Variables set to zero to solve the system are called Non-basic variables."
    },
    {
        question: "In simplex method, we add variables in the case of '=':",
        options: [
            "(A) Slack Variable",
            "(B) Surplus Variable",
            "(C) Artificial Variable",
            "(D) None of the above"
        ],
        answer: "(C)",
        explanation: "For equality constraints, we add an Artificial Variable to get an initial basis."
    },
    {
        question: "______ is another method to solve a given LPP involving some artificial variable.",
        options: [
            "(A) MODI method",
            "(B) Method of penalties",
            "(C) Two-phase simplex method",
            "(D) None of the above"
        ],
        answer: "(C)",
        explanation: "The Two-Phase Simplex Method is the standard alternative to Big-M for handling artificial variables."
    },
    {
        question: "In transportation models designed in linear programming, points of demand is classified as:",
        options: [
            "(A) ordination",
            "(B) transportation",
            "(C) destinations",
            "(D) origins"
        ],
        answer: "(C)",
        explanation: "Demand points are called Destinations (or sinks)."
    },
    {
        question: "In less than or equal to constraint equations, variable which is used to balance both side of equations is classified as:",
        options: [
            "(A) solving variable",
            "(B) condition variable",
            "(C) slack variable",
            "(D) positive variable"
        ],
        answer: "(C)",
        explanation: "A Slack variable is added to convert <= constraints into equalities."
    },
    {
        question: "If in a LPP, the solution of a variable can be made infinity large without violating the constraints, the solution is:",
        options: [
            "(A) Infeasible",
            "(B) Unbounded",
            "(C) Alternative",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "This defines an Unbounded solution."
    },
    {
        question: "A BFS of a LPP is said to be ....... if at least one of the basic variable is zero.",
        options: [
            "(A) Degenerate",
            "(B) Non-degenerate",
            "(C) Infeasible",
            "(D) Unbounded"
        ],
        answer: "(A)",
        explanation: "If a basic variable takes the value 0, the solution is Degenerate."
    },
    {
        question: "In simplex method slack variables are assigned zero coefficients because:",
        options: [
            "(A) no contribution in objective function",
            "(B) high contribution in objective function",
            "(C) divisor contribution in objective function",
            "(D) base contribution in objective function"
        ],
        answer: "(A)",
        explanation: "Slack variables represent unused resources and do not contribute value/profit to the objective function."
    },
    {
        question: "Which of the following is a type of Linear Programming Problem?",
        options: [
            "(A) Manufacturing problem",
            "(B) Diet-problem",
            "(C) Transportation problems",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "These are all classic examples of LPP applications."
    },
    {
        question: "Cells in the transportation problem having positive allocation will be called:",
        options: [
            "(A) cells",
            "(B) occupied",
            "(C) unoccupied",
            "(D) table"
        ],
        answer: "(B)",
        explanation: "Cells with allocations are called Occupied (or Basic) cells."
    },
    {
        question: "The time required for two operations cutting and binding of 5 jobs are as follows... What is the optimal sequence?",
        options: [
            "(A) 2-4-1-3-5",
            "(B) 3-4-2-1-5",
            "(C) 1-2-3-4-5",
            "(D) 3-5-2-4-1"
        ],
        answer: "(B)",
        explanation: "Min time is 2 (Job 3, Machine 1) -> Job 3 First. Next min is 4 (Job 5, Machine 2) -> Job 5 Last. Correct sequence calculation yields 3-4-2-1-5."
    },
    {
        question: "Sequencing is a subset of:",
        options: [
            "(A) Routing",
            "(B) Scheduling",
            "(C) Expediting",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "Sequencing is a part of Scheduling."
    },
    {
        question: "______ are expressed is the form of inequities or equations.",
        options: [
            "(A) Constraints",
            "(B) Objective Functions",
            "(C) Both (A) and (B)",
            "(D) None of the above"
        ],
        answer: "(A)",
        explanation: "Constraints are the restrictions expressed as inequalities/equations."
    },
    {
        question: "The objective, functions and constraints are linear relationship between:",
        options: [
            "(A) Variables",
            "(B) Constraints",
            "(C) Functions",
            "(D) All of the above"
        ],
        answer: "(A)",
        explanation: "LPP models relationships between Decision Variables."
    },
    {
        question: "Graphic method can be applied to solve a LPP when there are only ______ variable.",
        options: [
            "(A) One",
            "(B) More than one",
            "(C) Two",
            "(D) Three"
        ],
        answer: "(C)",
        explanation: "Graphical method works for 2 variables."
    },
    {
        question: "In LPP, degeneracy occurs in ______ stages.",
        options: [
            "(A) One",
            "(B) Two",
            "(C) Three",
            "(D) Four"
        ],
        answer: "(B)",
        explanation: "Degeneracy can occur at two stages: (1) Initial basic feasible solution construction, or (2) Subsequent iterations."
    },
    {
        question: "If there are more than one optimum solution for the decision variable the solution is:",
        options: [
            "(A) Infeasible",
            "(B) Unbounded",
            "(C) Alternative",
            "(D) None of the above"
        ],
        answer: "(C)",
        explanation: "Alternative (or Multiple) Optimal Solutions."
    },
    {
        question: "An optimization model:",
        options: [
            "(A) Mathematically provides the best decision",
            "(B) Provides decision within its limited context",
            "(C) Helps in evaluating various alternatives constantly",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "Optimization models are used for decision support in all these ways."
    },
    {
        question: "The word \"Linear\" means that the relationships are represented by:",
        options: [
            "(A) Diagonal lines",
            "(B) Curved lines",
            "(C) Straight lines",
            "(D) Slanting lines"
        ],
        answer: "(C)",
        explanation: "Linear means Straight lines (proportional relationships)."
    },
    {
        question: "Any feasible solution which optimizes (minimizes or maximizes) the objective function of the LPP is called its:",
        options: [
            "(A) Optimal solution",
            "(B) Non-basic variables",
            "(C) Solution",
            "(D) Basic feasible solution"
        ],
        answer: "(A)",
        explanation: "Definition of Optimal Solution."
    },
    {
        question: "A set of values X_1, X_2... X_n which satisfies the constraints of the LPP is called:",
        options: [
            "(A) Solution",
            "(B) Variable",
            "(C) Linearity",
            "(D) None of the above"
        ],
        answer: "(A)",
        explanation: "Any set of values satisfying constraints is a Solution (specifically, Feasible Solution)."
    },
    {
        question: "An objective function is maximized when it is a ______ function.",
        options: [
            "(A) Passive",
            "(B) Profit",
            "(C) Cost",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "Profit is typically maximized; Cost is minimized."
    },
    {
        question: "PP is exactly used in solving what kind of resource allocation problems?",
        options: [
            "(A) Production planning and scheduling",
            "(B) Transportation",
            "(C) Sales and advertising",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "Programming Problems (PP) apply to all these allocation scenarios."
    },
    {
        question: "______ which is a subclass of a Linear Programming Problem (LPP).",
        options: [
            "(A) Programming problem",
            "(B) Transportation problem",
            "(C) Computer problem",
            "(D) Both (A) and (B)"
        ],
        answer: "(B)",
        explanation: "The Transportation Problem is a specific type/subclass of LPP."
    },
    {
        question: "MODI method is used to obtain:",
        options: [
            "(A) Optimal solutions",
            "(B) Optimality test",
            "(C) Both (A) and (B)",
            "(D) None of the above"
        ],
        answer: "(C)",
        explanation: "MODI is used to test optimality and iterate toward the optimal solution."
    },
    {
        question: "For solving an assignment problem, which method is used?",
        options: [
            "(A) Hungarian",
            "(B) American",
            "(C) German",
            "(D) Both (A) and (B)"
        ],
        answer: "(A)",
        explanation: "The Hungarian Method is the standard algorithm."
    },
    {
        question: "To make an unbalanced assignment problem balanced, what are added with all entries as zeroes ?",
        options: [
            "(A) Dummy rows",
            "(B) Dummy columns",
            "(C) Both (A) and (B)",
            "(D) Dummy entries"
        ],
        answer: "(C)",
        explanation: "Either a dummy row or column is added depending on where the shortage is."
    },
    {
        question: "Any feasible solution to a transportation problem containing m origins and n destinations is said to be:",
        options: [
            "(A) Independent",
            "(B) Degenerate",
            "(C) Non-degenerate",
            "(D) Both (A) and (B)"
        ],
        answer: "(C)",
        explanation: "A basic solution with exactly m + n - 1 allocations is Non-degenerate. (Note: Question context likely implies the condition for a \"proper\" basic solution)."
    },
    {
        question: "A path formed by allowing horizontal and vertical lines and the entire corner cells of which are occupied is called:",
        options: [
            "(A) Occupied path",
            "(B) Open path",
            "(C) Closed path",
            "(D) None of the above"
        ],
        answer: "(C)",
        explanation: "This describes a Closed loop/path used in the stepping stone method."
    },
    {
        question: "Once the initial basic feasible solution has been computed, what is the next step in the problem?",
        options: [
            "(A) VAM",
            "(B) Modified distribution method",
            "(C) Optimality test",
            "(D) None of the above"
        ],
        answer: "(C)",
        explanation: "After finding an initial solution, we perform an Optimality Test."
    },
    {
        question: "Server mechanism in a queuing system is characterised by:",
        options: [
            "(A) Server behaviour",
            "(B) Customer behaviour",
            "(C) Customer in the system",
            "(D) All of the above"
        ],
        answer: "(A)",
        explanation: "Server mechanism relates to server behavior/service pattern."
    },
    {
        question: "The variables whose coefficient vectors are unit vectors are called:",
        options: [
            "(A) Unit Variables",
            "(B) Bask Variables",
            "(C) Non-basic Variables",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "Variables forming the identity matrix (unit vectors) in the basis are Basic Variables."
    },
    {
        question: "The ______ variable is used for the greater than or equal to (>=) type of constraint.",
        options: [
            "(A) Only Slack",
            "(B) Surplus and Artificial",
            "(C) Only Artificial",
            "(D) Basic"
        ],
        answer: "(B)",
        explanation: "For >=, we subtract Surplus and add Artificial."
    },
    {
        question: "Cars arrive at a service station... mean rate 5 per hour. Service time ... mean 10 minutes. At steady state, average waiting time in queue is:",
        options: [
            "(A) 10 minutes",
            "(B) 20 minutes",
            "(C) 25 minutes",
            "(D) 50 minutes"
        ],
        answer: "(D)",
        explanation: "$\\lambda = 5/hr$. $\\mu = 6/hr$. $W_q = \\lambda / (\\mu(\\mu - \\lambda)) = 5 / (6 * 1) = 5/6$ hrs = 50 minutes."
    },
    {
        question: "The time period between placing an order its receipt in stock is known as:",
        options: [
            "(A) Lead time",
            "(B) Carrying time",
            "(C) Shortage time",
            "(D) Overtime"
        ],
        answer: "(A)",
        explanation: "Definition of Lead Time."
    },
    {
        question: "Which among the following costs is the expense of storing inventory for a specified period of time?",
        options: [
            "(A) Purchasing cost",
            "(B) Carrying cost",
            "(C) Financial cost",
            "(D) Storing cost"
        ],
        answer: "(B)",
        explanation: "Carrying (or Holding) Cost."
    },
    {
        question: "Johnson's rule is used for:",
        options: [
            "(A) Queuing problem",
            "(B) Sequencing problem",
            "(C) Both (A) and (B)",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "Sequencing rule."
    },
    {
        question: "Who is known as father of queuing theory?",
        options: [
            "(A) George Dantzig",
            "(B) A. K. Erlang",
            "(C) George Kendall",
            "(D) Both (B) and (C)"
        ],
        answer: "(B)",
        explanation: "A.K. Erlang."
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
        explanation: "Both define a queuing system."
    },
    {
        question: "For analysing the problem, decision-makers should normally study:",
        options: [
            "(A) Its qualitative aspects",
            "(B) Its quantitative aspects",
            "(C) Both (A) and (B)",
            "(D) Neither (A) nor (B)"
        ],
        answer: "(C)",
        explanation: "Both aspects are important for robust decision making."
    },
    {
        question: "In simplex method, if there is tie between a decision variable and a slack (or surplus) variable, ______ should be selected.",
        options: [
            "(A) Slack variable",
            "(B) Surplus variable",
            "(C) Decision variable",
            "(D) None of the above"
        ],
        answer: "(C)",
        explanation: "Preferring the decision variable moves the solution toward the feasible region's actual corners faster."
    },
    {
        question: "In operations research, the ______ are prepared for situations.",
        options: [
            "(A) mathematical models",
            "(B) physical models diagrammatic",
            "(C) diagrammatic models",
            "(D) None of the above"
        ],
        answer: "(A)",
        explanation: "OR relies on mathematical models."
    },
    {
        question: "Which of the following is not the phase of OR methodology?",
        options: [
            "(A) Formulating a problem",
            "(B) Constructing a model",
            "(C) Establishing controls",
            "(D) Controlling the environment"
        ],
        answer: "(D)",
        explanation: "OR controls the solution, not the environment itself."
    },
    {
        question: "Operations research is the application of ______ methods to arrive at the optimal solutions to the problems.",
        options: [
            "(A) economical",
            "(B) scientific",
            "(C) a",
            "(D) artistic"
        ],
        answer: "(B)",
        explanation: "Definition: Application of scientific methods."
    },
    {
        question: "Which technique is used in finding a solution for optimizing a given objective...?",
        options: [
            "(A) Queuing Theory",
            "(B) Waiting Line",
            "(C) Both (A) and (B)",
            "(D) Linear Programming"
        ],
        answer: "(D)",
        explanation: "Linear Programming optimizes an objective function."
    },
    {
        question: "The operations, research technique which helps in minimizing total waiting and service costs is:",
        options: [
            "(A) Queuing Theory",
            "(B) Decision Theory",
            "(C) Both (A) and (B)",
            "(D) None of the above"
        ],
        answer: "(A)",
        explanation: "Queuing theory balances waiting and service costs."
    },
    {
        question: "In graphical representation the bounded region is known as ______ region.",
        options: [
            "(A) solution",
            "(B) basic solution",
            "(C) feasible solution",
            "(D) optimal"
        ],
        answer: "(C)",
        explanation: "The overlap of constraints is the Feasible Region."
    },
    {
        question: "Maximize Z = 14x + 4y subject to 2x + y <= 10, x + y <= 6. max Z = ?",
        options: [
            "(A) 44 at (4, 2)",
            "(B) 60 at (4, 2)",
            "(C) 62 at (4, 0)",
            "(D) 48 at (4, 2)"
        ],
        answer: "(B)",
        explanation: "Max is 60 at (4,2)."
    },
    {
        question: "The occurrence of degeneracy while solving a transportation problem means that:",
        options: [
            "(A) total supply equals total demand",
            "(B) the solution so obtained is not feasible",
            "(C) the few allocations become negative",
            "(D) None of the above"
        ],
        answer: "(D)",
        explanation: "Degeneracy means allocations < m+n-1."
    },
    {
        question: "The initial solution of a transportation problem... The only condition is that:",
        options: [
            "(A) The solution be optimal",
            "(B) The rim conditions are satisfied",
            "(C) The solution not be degenerate",
            "(D) All of the above"
        ],
        answer: "(B)",
        explanation: "It must satisfy supply/demand constraints (rim conditions)."
    },
    {
        question: "The solution to a transportation problem... is feasible if number of positive allocations are:",
        options: [
            "(A) m + n",
            "(B) m * n",
            "(C) m + n - 1",
            "(D) m + n + 1"
        ],
        answer: "(C)",
        explanation: "Basic feasible solution condition is m+n-1."
    },
    {
        question: "The total time required to complete all the jobs in a job sequencing problem is known as:",
        options: [
            "(A) processing time",
            "(B) waiting time",
            "(C) elapsed time",
            "(D) idle time"
        ],
        answer: "(C)",
        explanation: "Total Elapsed Time."
    },
    {
        question: "The minimum number of line covering all zeros in a reduced cost matrix of order n can be:",
        options: [
            "(A) At least n",
            "(B) At most n",
            "(C) n - 1",
            "(D) n + 1"
        ],
        answer: "(B)",
        explanation: "Max lines needed is n."
    },
    {
        question: "One disadvantage of using North-West Corner Rule... is that:",
        options: [
            "(A) It is complicated to use",
            "(B) It does not take into account the cost of transportation",
            "(C) It leads to a degenerate initial solution",
            "(D) All of the above"
        ],
        answer: "(B)",
        explanation: "NWCM allocates based on position regardless of costs."
    },
    {
        question: "The unused materials are returned to stores with a material and ______ note.",
        options: [
            "(A) Acceptance",
            "(B) Transfer",
            "(C) Return",
            "(D) None of the above"
        ],
        answer: "(C)",
        explanation: "Material Return Note."
    },
    {
        question: "The optimum level of inventory is popularly referred to as the:",
        options: [
            "(A) Minimum stock level",
            "(B) Re-order stock level",
            "(C) Economic order quantity",
            "(D) None of the above"
        ],
        answer: "(C)",
        explanation: "EOQ is the optimal order size."
    },
    {
        question: "Which of the following is not an inventory?",
        options: [
            "(A) Machines",
            "(B) Raw Material",
            "(C) Finished Products",
            "(D) Consumable tools"
        ],
        answer: "(A)",
        explanation: "Machines are assets, not inventory."
    },
    {
        question: "The replacement policy that is imposed on an item irrespective of its failure is:",
        options: [
            "(A) Group replacement",
            "(B) Individual replacement",
            "(C) Repair spare replacement",
            "(D) Successive replacement"
        ],
        answer: "(A)",
        explanation: "Group replacement happens at fixed times regardless of failure state."
    },
    {
        question: "Customer behaviour in which the customer moves from one queue to another in a multiple channel situation is:",
        options: [
            "(A) balking",
            "(B) reneging",
            "(C) jockeying",
            "(D) alternating"
        ],
        answer: "(C)",
        explanation: "Jockeying is switching queues."
    },
    {
        question: "The right-hand side constant of a constraint in a primal problem appears in the corresponding dual as......",
        options: [
            "(A) coefficient in the objective function",
            "(B) a right-hand side constant of a function",
            "(C) an input output coefficient",
            "(D) a left-hand side constraint coefficient variable"
        ],
        answer: "(A)",
        explanation: "Primal RHS -> Dual Objective Coefficients."
    },
    {
        question: "If a job is having minimum processing time under both the machines, then the job is placed in:",
        options: [
            "(A) any one (first or last) position",
            "(B) available last position",
            "(C) available first position",
            "(D) Both first and last position"
        ],
        answer: "(A)",
        explanation: "It can be scheduled first or last arbitrarily."
    },
    {
        question: "In a transportation problem, the method which finds difference between two least cost for each row and column is:",
        options: [
            "(A) Minimum entry method",
            "(B) North-west corner method",
            "(C) North-east corner method",
            "(D) VAM method"
        ],
        answer: "(D)",
        explanation: "VAM uses penalties (differences between least costs)."
    },
    {
        question: "In simplex method, we add ................... in the case of constraints with sign \"=\".",
        options: [
            "(A) Surplus variable",
            "(B) Artificial variable",
            "(C) Slack variable",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "Artificial variables are added to equalities to form a basis."
    },
    {
        question: "As the order quantity increases, this cost will reduce:",
        options: [
            "(A) ordering cost",
            "(B) insurance cost",
            "(C) inventory carrying cost",
            "(D) stock out cost"
        ],
        answer: "(A)",
        explanation: "Ordering in bulk means fewer orders, reducing total Ordering Cost."
    },
    {
        question: "LOB stands for:",
        options: [
            "(A) Lot of Bills",
            "(B) Lot of Batches",
            "(C) Line of Batches",
            "(D) Line of Business"
        ],
        answer: "(D)",
        explanation: "In general business, LOB is Line of Business. In Project Management/OR, it can refer to Line of Balance. Given general contexts, D is standard."
    }
];