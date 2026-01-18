const optimizationQuestions2022_23 = [
  {
    "question": "The assignment problem is a special case of transportation problem in which:",
    "options": [
      "Number of origins are less than the number of destinations.",
      "Number of origins are greater than the number of destinations.",
      "Number of origins are greater than or equal to the number of destinations.",
      "Number of origins equals the number of destinations."
    ],
    "correct": 3,
    "explanation": "An assignment problem is a special transportation problem where the number of sources (origins) must equal the number of destinations (a square matrix)."
  },
  {
    "question": "The large negative opportunity cost value in an unused cell in a transportation table is chosen to improve the current solution because:",
    "options": [
      "It represents per unit cost reduction",
      "It represents per unit cost improvement",
      "It ensure no rim requirement violation",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "A large negative value in the opportunity cost (net evaluation) indicates potential savings or improvement in the objective function if allocations are made there."
  },
  {
    "question": "If an opportunity cost value is used for an unused cell to test optimality, it should be:",
    "options": [
      "Equal to zero",
      "Most negative number",
      "Most positive number",
      "Any value"
    ],
    "correct": 1,
    "explanation": "In a minimization problem, if any opportunity cost (d_ij) is negative, the solution is not optimal. The most negative value indicates the entering variable for improvement."
  },
  {
    "question": "Queuing theory deals with the problem of:",
    "options": [
      "Material handling",
      "Reducing waiting time or idle time",
      "Better utilization of man services",
      "Effective use of machines"
    ],
    "correct": 1,
    "explanation": "Queuing theory analyzes waiting lines to minimize the costs associated with waiting and idle service resources."
  },
  {
    "question": "______ is that element of the simplex table which is both in the key row and key column.",
    "options": [
      "Key element",
      "Pivot element",
      "Both (A) and (B)",
      "None of the above"
    ],
    "correct": 2,
    "explanation": "The intersection of the key row and key column is called the Pivot Element or Key Element."
  },
  {
    "question": "Traffic intensity is computed by using the formula:",
    "options": [
      "ρ = λ/μ",
      "ρ = μ/λ",
      "ρ = λ/μ + 1",
      "ρ = μ/λ + 1"
    ],
    "correct": 0,
    "explanation": "Traffic intensity (or utilization factor, ρ) is defined as the arrival rate (λ) divided by the service rate (μ)."
  },
  {
    "question": "Matrix Minima Method to find initial feasible solution to a TP is also called:",
    "options": [
      "NWCM",
      "LCM",
      "VAM",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "Matrix Minima Method is another name for the Least Cost Method (LCM)."
  },
  {
    "question": "Traffic intensity in Queuing Theory is also called:",
    "options": [
      "Service factor",
      "Arrival factor",
      "Utilisation factor",
      "None of the above"
    ],
    "correct": 2,
    "explanation": "Traffic intensity represents the server utilization (Utilisation factor)."
  },
  {
    "question": "A customer's behaviour of leaving the queue due to impatience is called:",
    "options": [
      "Jockying",
      "Reneging",
      "Collusion",
      "Balking"
    ],
    "correct": 1,
    "explanation": "Reneging occurs when a customer joins the queue but leaves before being served due to impatience. (Balking is deciding not to join at all)."
  },
  {
    "question": "Commonly assumed probability distribution of service pattern are:",
    "options": [
      "Poisson distribution",
      "Exponential distribution",
      "Erlang distribution",
      "Both (B) and (C)"
    ],
    "correct": 1,
    "explanation": "While arrivals often follow Poisson, Service times are typically modeled using the Exponential distribution."
  },
  {
    "question": "A LPP model does not contain:",
    "options": [
      "Decision",
      "Constraints",
      "Feasible solution",
      "Spreadsheet"
    ],
    "correct": 3,
    "explanation": "An LPP model consists of decision variables, constraints, and an objective function. A spreadsheet is a tool to solve it, not a component of the mathematical model itself."
  },
  {
    "question": "In sequencing if the smallest time belong to machine-1, then that job has to be placed ______ of the sequence.",
    "options": [
      "in the middle",
      "in the starting",
      "at end",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "According to Johnson's Rule, if the minimum processing time is on the first machine (M1), the job is processed first (at the start)."
  },
  {
    "question": "Replacement is said to be necessary if:",
    "options": [
      "Failure rate is increasing.",
      "Failure cost is increasing.",
      "Failure probability is increasing.",
      "Any of the above"
    ],
    "correct": 3,
    "explanation": "Increasing failure rate, cost, or probability are all valid reasons to consider replacement."
  },
  {
    "question": "In the formula of Economic Order Quantity, the alphabet 'O' stands for:",
    "options": [
      "Ordering Level",
      "Ordering Cost",
      "Ordering and Carrying Cost",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "In the EOQ formula, 'O' typically represents Ordering Cost per order."
  },
  {
    "question": "What is the first approach in optimization methods?",
    "options": [
      "Theory of bending",
      "Theory of layout",
      "Theory of elongation",
      "Theory of stress"
    ],
    "correct": 3,
    "explanation": "This question seems out of standard OR context or refers to specific engineering optimization history."
  },
  {
    "question": "Initial feasible solution to a transportation problem can be found out by:",
    "options": [
      "VAM",
      "MODI Method",
      "Both (A) and (B)",
      "None of the above"
    ],
    "correct": 0,
    "explanation": "VAM (Vogel's Approximation Method) finds an initial solution. MODI is for optimality testing."
  },
  {
    "question": "It is assumed that maintenance cost mostly depends on :",
    "options": [
      "Calendar age",
      "Running age",
      "Manufacturing date",
      "User's age"
    ],
    "correct": 1,
    "explanation": "Maintenance costs usually increase as the Running age (usage) of the machine increases."
  },
  {
    "question": "The coefficient of an artificial variable in the objective function of penalty method are always assumed to be:",
    "options": [
      "0",
      "1",
      "M",
      "-M"
    ],
    "correct": 3,
    "explanation": "In Big-M method, artificial variables are assigned a very large penalty coefficient (-M for max, +M for min)."
  },
  {
    "question": "The assignment problem will have alternate solutions when the total opportunity cost matrix has:",
    "options": [
      "at least one zero in each row and column",
      "when all rows have two zeros",
      "when there is a tie between zero opportunity cost cells",
      "if two diagonal elements are zeros."
    ],
    "correct": 2,
    "explanation": "Alternate solutions arise when the zero assignment is not unique (e.g., a 'tie' or loop allows multiple valid sets of allocations)."
  },
  {
    "question": "The average arrival rate in a single server queuing system is 10 customers per hour and average service rate is 15 customers per hour. The average time that a customer must wait before it is taken up for service shall be ______ minutes.",
    "options": [
      "6",
      "8",
      "10",
      "12"
    ],
    "correct": 1,
    "explanation": "Wq = 8 minutes."
  },
  {
    "question": "In the optimal simplex table, Zj - Cj = 0 value indicates:",
    "options": [
      "alternative solution",
      "bounded solution",
      "infeasible solution",
      "unbounded solution"
    ],
    "correct": 0,
    "explanation": "If the net evaluation is zero for a non-basic variable in the optimal table, it indicates that entering that variable would not change the Z value, implying Alternative Optimal Solutions exist."
  },
  {
    "question": "When D = 36000, holding cost = 1.20, set-up = 400, EOQ is:",
    "options": [
      "3465",
      "3750",
      "3500",
      "4000"
    ],
    "correct": 0,
    "explanation": "EOQ = 3465."
  },
  {
    "question": "When the probability of failure reduces gradually, the failure mode is said to be :",
    "options": [
      "Regressive",
      "Retrogressive",
      "Progressive",
      "Recursive"
    ],
    "correct": 0,
    "explanation": "Regressive failure means failure probability decreases with time (common in early 'infant mortality' phase)."
  },
  {
    "question": "When money value changes with time at 10%, then PWF for first year is:",
    "options": [
      "1",
      "0.909",
      "0.852",
      "0.9"
    ],
    "correct": 1,
    "explanation": "1 / (1 + 0.1) = 0.909."
  },
  {
    "question": "The unit of traffic intensity is:",
    "options": [
      "Poisson",
      "Markow",
      "Erlang",
      "Kendall"
    ],
    "correct": 2,
    "explanation": "Traffic intensity is measured in Erlangs."
  },
  {
    "question": "If the operating characteristics of a queue are dependent on time, then it is said to be:",
    "options": [
      "Transient state",
      "Busy state",
      "Steady state",
      "Explosive state"
    ],
    "correct": 0,
    "explanation": "Transient state means the system behavior evolves over time. Steady state is when it becomes independent of time."
  },
  {
    "question": "As per queue discipline is the following is not the negative behavior of customer:",
    "options": [
      "Balking",
      "Reneging",
      "Boarding",
      "Collusion"
    ],
    "correct": 2,
    "explanation": "Boarding (if it means entering service) is normal. Collusion is also negative behavior."
  },
  {
    "question": "The method used to solve LPP with use of artificial variables is called:",
    "options": [
      "Dual Simplex",
      "Graphical",
      "Big-M",
      "Transportation Problem"
    ],
    "correct": 2,
    "explanation": "The Big-M Method is specifically designed to handle artificial variables in Simplex."
  },
  {
    "question": "Which of the followings is an assumption of Linear Programming Technique?",
    "options": [
      "Divisibility",
      "Additivity",
      "Proportionality",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "All listed items are fundamental assumptions of LP."
  },
  {
    "question": "During an iteration while moving from one solution to the next, degeneracy may occur when:",
    "options": [
      "The closed path indicates a diagonal move",
      "Two or more occupied cells are on the closed path but neither of them represents a corner of the path.",
      "Two or more occupied cells on the closed path with minus sign are tied for lowest circled value",
      "Either of the above"
    ],
    "correct": 2,
    "explanation": "In the Stepping Stone/MODI method, degeneracy occurs if there is a tie for the minimum value among the donor cells (cells with minus sign)."
  },
  {
    "question": "The smallest quantity is chosen at the corners of the closed path with negative sign to be assigned at unused cell because:",
    "options": [
      "It improve the total cost",
      "It does not disturb rim conditions",
      "It ensure feasible solution",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Subtracting/Adding the min value maintains the supply/demand balance (rim conditions) and ensures non-negativity (feasibility)."
  },
  {
    "question": "The occurrence of degeneracy while solving a transportation problem means that:",
    "options": [
      "total supply equals total demand",
      "the solution so obtained is not feasible",
      "the few allocations become negative",
      "None of the above"
    ],
    "correct": 3,
    "explanation": "Degeneracy means the number of occupied cells is less than m+n-1. None of A, B, or C correctly define it."
  },
  {
    "question": "In maximization problem, optimal solution occurring at corner point yields the:",
    "options": [
      "mean values of z",
      "highest value of z",
      "lowest value of z",
      "mid values of z"
    ],
    "correct": 1,
    "explanation": "In maximization, the optimal solution corresponds to the highest value of the objective function Z."
  },
  {
    "question": "Column in simplex initial table used to represent new basic variable is classified as:",
    "options": [
      "column variable",
      "key column",
      "key row",
      "row variable"
    ],
    "correct": 1,
    "explanation": "The Key Column (Pivot Column) determines the entering variable (new basic variable)."
  },
  {
    "question": "In simplex method, slack, surplus and artificial variables are restricted to be:",
    "options": [
      "multiplied",
      "negative",
      "non-negative",
      "divided"
    ],
    "correct": 2,
    "explanation": "Non-negativity constraint applies to all variables in Simplex."
  },
  {
    "question": "In simplex method basic solution set as n - m = 0, all variables other than basic are classified as:",
    "options": [
      "constant variable",
      "non-positive variables",
      "basic variables",
      "non-basic variable"
    ],
    "correct": 3,
    "explanation": "Variables set to zero to solve the system are called Non-basic variables."
  },
  {
    "question": "In simplex method, we add variables in the case of '=':",
    "options": [
      "Slack Variable",
      "Surplus Variable",
      "Artificial Variable",
      "None of the above"
    ],
    "correct": 2,
    "explanation": "For equality constraints, we add an Artificial Variable to get an initial basis."
  },
  {
    "question": "______ is another method to solve a given LPP involving some artificial variable.",
    "options": [
      "MODI method",
      "Method of penalties",
      "Two-phase simplex method",
      "None of the above"
    ],
    "correct": 2,
    "explanation": "The Two-Phase Simplex Method is the standard alternative to Big-M for handling artificial variables."
  },
  {
    "question": "In transportation models designed in linear programming, points of demand is classified as:",
    "options": [
      "ordination",
      "transportation",
      "destinations",
      "origins"
    ],
    "correct": 2,
    "explanation": "Demand points are called Destinations (or sinks)."
  },
  {
    "question": "In less than or equal to constraint equations, variable which is used to balance both side of equations is classified as:",
    "options": [
      "solving variable",
      "condition variable",
      "slack variable",
      "positive variable"
    ],
    "correct": 2,
    "explanation": "A Slack variable is added to convert <= constraints into equalities."
  },
  {
    "question": "If in a LPP, the solution of a variable can be made infinity large without violating the constraints, the solution is:",
    "options": [
      "Infeasible",
      "Unbounded",
      "Alternative",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "This defines an Unbounded solution."
  },
  {
    "question": "A BFS of a LPP is said to be ....... if at least one of the basic variable is zero.",
    "options": [
      "Degenerate",
      "Non-degenerate",
      "Infeasible",
      "Unbounded"
    ],
    "correct": 0,
    "explanation": "If a basic variable takes the value 0, the solution is Degenerate."
  },
  {
    "question": "In simplex method slack variables are assigned zero coefficients because:",
    "options": [
      "no contribution in objective function",
      "high contribution in objective function",
      "divisor contribution in objective function",
      "base contribution in objective function"
    ],
    "correct": 0,
    "explanation": "Slack variables represent unused resources and do not contribute value/profit to the objective function."
  },
  {
    "question": "Which of the following is a type of Linear Programming Problem?",
    "options": [
      "Manufacturing problem",
      "Diet-problem",
      "Transportation problems",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "These are all classic examples of LPP applications."
  },
  {
    "question": "Cells in the transportation problem having positive allocation will be called:",
    "options": [
      "cells",
      "occupied",
      "unoccupied",
      "table"
    ],
    "correct": 1,
    "explanation": "Cells with allocations are called Occupied (or Basic) cells."
  },
  {
    "question": "The time required for two operations cutting and binding of 5 jobs are as follows... What is the optimal sequence?",
    "options": [
      "2-4-1-3-5",
      "3-4-2-1-5",
      "1-2-3-4-5",
      "3-5-2-4-1"
    ],
    "correct": 1,
    "explanation": "Min time is 2 (Job 3, Machine 1) -> Job 3 First. Sequence starts with 3. Job 5 is last. Correct sequence is 3-4-2-1-5."
  },
  {
    "question": "Sequencing is a subset of:",
    "options": [
      "Routing",
      "Scheduling",
      "Expediting",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "Sequencing is a part of Scheduling."
  },
  {
    "question": "______ are expressed is the form of inequities or equations.",
    "options": [
      "Constraints",
      "Objective Functions",
      "Both (A) and (B)",
      "None of the above"
    ],
    "correct": 0,
    "explanation": "Constraints are the restrictions expressed as inequalities/equations."
  },
  {
    "question": "The objective, functions and constraints are linear relationship between:",
    "options": [
      "Variables",
      "Constraints",
      "Functions",
      "All of the above"
    ],
    "correct": 0,
    "explanation": "LPP models relationships between Decision Variables."
  },
  {
    "question": "Graphic method can be applied to solve a LPP when there are only ______ variable.",
    "options": [
      "One",
      "More than one",
      "Two",
      "Three"
    ],
    "correct": 2,
    "explanation": "Graphical method works for 2 variables."
  },
  {
    "question": "In LPP, degeneracy occurs in ______ stages.",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correct": 1,
    "explanation": "Degeneracy can occur at two stages: (1) Initial basic feasible solution construction, or (2) Subsequent iterations."
  },
  {
    "question": "If there are more than one optimum solution for the decision variable the solution is:",
    "options": [
      "Infeasible",
      "Unbounded",
      "Alternative",
      "None of the above"
    ],
    "correct": 2,
    "explanation": "Alternative (or Multiple) Optimal Solutions."
  },
  {
    "question": "An optimization model:",
    "options": [
      "Mathematically provides the best decision",
      "Provides decision within its limited context",
      "Helps in evaluating various alternatives constantly",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Optimization models do all these things."
  },
  {
    "question": "The word 'Linear' means that the relationships are represented by:",
    "options": [
      "Diagonal lines",
      "Curved lines",
      "Straight lines",
      "Slanting lines"
    ],
    "correct": 2,
    "explanation": "Linear means Straight lines (proportional relationships)."
  },
  {
    "question": "Any feasible solution which optimizes (minimizes or maximizes) the objective function of the LPP is called its:",
    "options": [
      "Optimal solution",
      "Non-basic variables",
      "Solution",
      "Basic feasible solution"
    ],
    "correct": 0,
    "explanation": "Definition of Optimal Solution."
  },
  {
    "question": "A set of values X1, X2...Xn which satisfies the constraints of the LPP is called:",
    "options": [
      "Solution",
      "Variable",
      "Linearity",
      "None of the above"
    ],
    "correct": 0,
    "explanation": "Any set of values satisfying constraints is a Solution (specifically, Feasible Solution)."
  },
  {
    "question": "An objective function is maximized when it is a ______ function.",
    "options": [
      "Passive",
      "Profit",
      "Cost",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "Profit is typically maximized; Cost is minimized."
  },
  {
    "question": "PP is exactly used in solving what kind of resource allocation problems?",
    "options": [
      "Production planning and scheduling",
      "Transportation",
      "Sales and advertising",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Programming Problems (PP) apply to all these allocation scenarios."
  },
  {
    "question": "______ which is a subclass of a Linear Programming Problem (LPP).",
    "options": [
      "Programming problem",
      "Transportation problem",
      "Computer problem",
      "Both (A) and (B)"
    ],
    "correct": 1,
    "explanation": "The Transportation Problem is a specific type/subclass of LPP."
  },
  {
    "question": "MODI method is used to obtain:",
    "options": [
      "Optimal solutions",
      "Optimality test",
      "Both (A) and (B)",
      "None of the above"
    ],
    "correct": 2,
    "explanation": "MODI is used to test optimality and iterate toward the optimal solution."
  },
  {
    "question": "For solving an assignment problem, which method is used?",
    "options": [
      "Hungarian",
      "American",
      "German",
      "Both (A) and (B)"
    ],
    "correct": 0,
    "explanation": "The Hungarian Method is the standard algorithm."
  },
  {
    "question": "To make an unbalanced assignment problem balanced, what are added with all entries as zeroes ?",
    "options": [
      "Dummy rows",
      "Dummy columns",
      "Both (A) and (B)",
      "Dummy entries"
    ],
    "correct": 2,
    "explanation": "Either a dummy row or column is added depending on where the shortage is."
  },
  {
    "question": "Any feasible solution to a transportation problem containing m origins and n destinations is said to be:",
    "options": [
      "Independent",
      "Degenerate",
      "Non-degenerate",
      "Both (A) and (B)"
    ],
    "correct": 2,
    "explanation": "A solution with exactly m+n-1 independent allocations is Non-degenerate. If fewer, it is Degenerate."
  },
  {
    "question": "A path formed by allowing horizontal and vertical lines and the entire corner cells of which are occupied is called:",
    "options": [
      "Occupied path",
      "Open path",
      "Closed path",
      "None of the above"
    ],
    "correct": 2,
    "explanation": "This describes a Closed loop/path used in stepping stone method."
  },
  {
    "question": "Once the initial basic feasible solution has been computed, what is the next step in the problem?",
    "options": [
      "VAM",
      "Modified distribution method",
      "Optimality test",
      "None of the above"
    ],
    "correct": 2,
    "explanation": "After finding an initial solution, we perform an Optimality Test."
  },
  {
    "question": "Server mechanism in a queuing system is characterised by:",
    "options": [
      "Server behaviour",
      "Customer behaviour",
      "Customer in the system",
      "All of the above"
    ],
    "correct": 0,
    "explanation": "Server mechanism relates to server behavior/service pattern."
  },
  {
    "question": "The variables whose coefficient vectors are unit vectors are called:",
    "options": [
      "Unit Variables",
      "Bask Variables",
      "Non-basic Variables",
      "None of the above"
    ],
    "correct": 3,
    "explanation": "Variables forming the identity matrix in the basis are Basic Variables. 'Bask' in option B is likely a typo for Basic."
  },
  {
    "question": "The ______ variable is used for the greater than or equal to (>=) type of constraint.",
    "options": [
      "Only Slack",
      "Surplus and Artificial",
      "Only Artificial",
      "Basic"
    ],
    "correct": 1,
    "explanation": "For >=, we subtract Surplus and add Artificial."
  },
  {
    "question": "Cars arrive at a service station... mean rate 5 per hour. Service time ... mean 10 minutes. At steady state, average waiting time in queue is:",
    "options": [
      "10 minutes",
      "20 minutes",
      "25 minutes",
      "50 minutes"
    ],
    "correct": 3,
    "explanation": "Wq = 50 minutes."
  },
  {
    "question": "The time period between placing an order its receipt in stock is known as:",
    "options": [
      "Lead time",
      "Carrying time",
      "Shortage time",
      "Overtime"
    ],
    "correct": 0,
    "explanation": "Definition of Lead Time."
  },
  {
    "question": "Which among the following costs is the expense of storing inventory for a specified period of time?",
    "options": [
      "Purchasing cost",
      "Carrying cost",
      "Financial cost",
      "Storing cost"
    ],
    "correct": 1,
    "explanation": "Carrying (or Holding) Cost."
  },
  {
    "question": "Johnson's rule is used for:",
    "options": [
      "Queuing problem",
      "Sequencing problem",
      "Both (A) and (B)",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "Sequencing rule."
  },
  {
    "question": "Who is known as father of queuing theory?",
    "options": [
      "George Dantzig",
      "A. K. Erlang",
      "George Kendall",
      "Both (B) and (C)"
    ],
    "correct": 1,
    "explanation": "A.K. Erlang."
  },
  {
    "question": "Which of the following characteristics apply to the queuing system?",
    "options": [
      "customer population",
      "arrival process",
      "Both (A) and (B)",
      "Neither (A) nor (B)"
    ],
    "correct": 2,
    "explanation": "Both define a queuing system."
  },
  {
    "question": "For analysing the problem, decision-makers should normally study:",
    "options": [
      "Its qualitative aspects",
      "Its quantitative aspects",
      "Both (A) and (B)",
      "Neither (A) nor (B)"
    ],
    "correct": 2,
    "explanation": "Both aspects are important for robust decision making."
  },
  {
    "question": "In simplex method, if there is tie between a decision variable and a slack (or surplus) variable, ______ should be selected.",
    "options": [
      "Slack variable",
      "Surplus variable",
      "Decision variable",
      "None of the above"
    ],
    "correct": 2,
    "explanation": "Preferring the decision variable moves the solution toward the feasible region's actual corners faster."
  },
  {
    "question": "In operations research, the ______ are prepared for situations.",
    "options": [
      "mathematical models",
      "physical models diagrammatic",
      "diagrammatic models",
      "None of the above"
    ],
    "correct": 0,
    "explanation": "OR relies on mathematical models."
  },
  {
    "question": "Which of the following is not the phase of OR methodology?",
    "options": [
      "Formulating a problem",
      "Constructing a model",
      "Establishing controls",
      "Controlling the environment"
    ],
    "correct": 3,
    "explanation": "OR controls the solution, not the environment itself."
  },
  {
    "question": "Operations research is the application of ______ methods to arrive at the optimal solutions to the problems.",
    "options": [
      "economical",
      "scientific",
      "a",
      "artistic"
    ],
    "correct": 1,
    "explanation": "Definition: Application of scientific methods."
  },
  {
    "question": "Which technique is used in finding a solution for optimizing a given objective...?",
    "options": [
      "Queuing Theory",
      "Waiting Line",
      "Both (A) and (B)",
      "Linear Programming"
    ],
    "correct": 3,
    "explanation": "Linear Programming optimizes an objective function."
  },
  {
    "question": "The operations, research technique which helps in minimizing total waiting and service costs is:",
    "options": [
      "Queuing Theory",
      "Decision Theory",
      "Both (A) and (B)",
      "None of the above"
    ],
    "correct": 0,
    "explanation": "Queuing theory balances waiting and service costs."
  },
  {
    "question": "In graphical representation the bounded region is known as ______ region.",
    "options": [
      "solution",
      "basic solution",
      "feasible solution",
      "optimal"
    ],
    "correct": 2,
    "explanation": "The overlap of constraints is the Feasible Region."
  },
  {
    "question": "Maximize Z = 13x + 4y subject to constraints...",
    "options": [
      "44 at (4, 2)",
      "60 at (4, 2)",
      "62 at (4, 0)",
      "48 at (4, 2)"
    ],
    "correct": 1,
    "explanation": "Max is 60."
  },
  {
    "question": "The occurrence of degeneracy while solving a transportation problem means that:",
    "options": [
      "total supply equals total demand",
      "the solution so obtained is not feasible",
      "the few allocations become negative",
      "None of the above"
    ],
    "correct": 3,
    "explanation": "Degeneracy means allocations < m+n-1."
  },
  {
    "question": "The initial solution of a transportation problem... The only condition is that:",
    "options": [
      "The solution be optimal",
      "The rim conditions are satisfied",
      "The solution not be degenerate",
      "All of the above"
    ],
    "correct": 1,
    "explanation": "It must satisfy supply/demand constraints (rim conditions)."
  },
  {
    "question": "The solution to a transportation problem... is feasible if number of positive allocations are:",
    "options": [
      "m + n",
      "m * n",
      "m + n - 1",
      "m + n + 1"
    ],
    "correct": 2,
    "explanation": "Basic feasible solution condition is m+n-1."
  },
  {
    "question": "The total time required to complete all the jobs in a job sequencing problem is known as:",
    "options": [
      "processing time",
      "waiting time",
      "elapsed time",
      "idle time"
    ],
    "correct": 2,
    "explanation": "Total Elapsed Time."
  },
  {
    "question": "The minimum number of line covering all zeros in a reduced cost matrix of order n can be:",
    "options": [
      "At least n",
      "At most n",
      "n - 1",
      "n + 1"
    ],
    "correct": 1,
    "explanation": "Max lines needed is n."
  },
  {
    "question": "One disadvantage of using North-West Corner Rule... is that:",
    "options": [
      "It is complicated to use",
      "It does not take into account cost of transportation",
      "It leads to a degenerate initial solution",
      "All of the above"
    ],
    "correct": 1,
    "explanation": "NWCM ignores costs, focusing only on position, often leading to higher initial costs."
  },
  {
    "question": "The unused materials are returned to stores with a material and ______ note.",
    "options": [
      "Acceptance",
      "Transfer",
      "Return",
      "None of the above"
    ],
    "correct": 2,
    "explanation": "Material Return Note."
  },
  {
    "question": "The optimum level of inventory is popularly referred to as the:",
    "options": [
      "Minimum stock level",
      "Re-order stock level",
      "Economic order quantity",
      "None of the above"
    ],
    "correct": 2,
    "explanation": "EOQ is the optimal order size."
  },
  {
    "question": "Which of the following is not an inventory?",
    "options": [
      "Machines",
      "Raw Material",
      "Finished Products",
      "Consumable tools"
    ],
    "correct": 0,
    "explanation": "Machines are assets, not inventory."
  },
  {
    "question": "The replacement policy that is imposed on an item irrespective of its failure is:",
    "options": [
      "Group replacement",
      "Individual replacement",
      "Repair spare replacement",
      "Successive replacement"
    ],
    "correct": 0,
    "explanation": "Group replacement happens at fixed times regardless of failure state."
  },
  {
    "question": "Customer behaviour in which the customer moves from one queue to another in a multiple channel situation is:",
    "options": [
      "balking",
      "reneging",
      "jockeying",
      "alternating"
    ],
    "correct": 2,
    "explanation": "Jockeying is switching queues."
  },
  {
    "question": "The right-hand side constant of a constraint in a primal problem appears in the corresponding dual as......",
    "options": [
      "coefficient in the objective function",
      "a right-hand side constant of a function",
      "an input output coefficient",
      "a left-hand side constraint coefficient variable"
    ],
    "correct": 0,
    "explanation": "Primal RHS -> Dual Objective Coefficients."
  },
  {
    "question": "If a job is having minimum processing time under both the machines, then the job is placed in:",
    "options": [
      "any one (first or last) position",
      "available last position",
      "available first position",
      "Both first and last position"
    ],
    "correct": 0,
    "explanation": "It can be scheduled first or last arbitrarily (tie-breaking rule)."
  },
  {
    "question": "In a transportation problem, the method which finds difference between two least cost for each row and column is:",
    "options": [
      "Minimum entry method",
      "North-west corner method",
      "North-east corner method",
      "VAM method"
    ],
    "correct": 3,
    "explanation": "VAM uses penalties (differences between least costs)."
  },
  {
    "question": "In simplex method, we add ................... in the case of constraints with sign '='.",
    "options": [
      "Surplus variable",
      "Artificial variable",
      "Slack variable",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "Artificial variables are added to equalities to form a basis."
  },
  {
    "question": "As the order quantity increases, this cost will reduce:",
    "options": [
      "ordering cost",
      "insurance cost",
      "inventory carrying cost",
      "stock out cost"
    ],
    "correct": 0,
    "explanation": "Ordering in bulk means fewer orders, reducing total Ordering Cost."
  },
  {
    "question": "LOB stands for:",
    "options": [
      "Lot of Bills",
      "Lot of Batches",
      "Line of Batches",
      "Line of Business"
    ],
    "correct": 3,
    "explanation": "Line of Business (or Line of Balance in project management context)."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = optimizationQuestions2022_23;
}
