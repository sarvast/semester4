const optimizationQuestions2024_25 = [
  {
    "question": "Which of the following is not true about the graphical method of linear programming?",
    "options": [
      "It is applicable when there are exactly two decision variables",
      "It gives the exact optimal solution",
      "It can be used for problems with more than two variables",
      "It is a visual approach"
    ],
    "correct": 2,
    "explanation": "The graphical method is limited to problems with two decision variables because it relies on 2D plotting. Problems with more than two variables require algebraic methods like Simplex."
  },
  {
    "question": "If the feasible region is unbounded, the optimal solution:",
    "options": [
      "Does not exist",
      "May still exist",
      "Will always be at infinity",
      "Will be at the origin"
    ],
    "correct": 1,
    "explanation": "An unbounded region may still have an optimal solution (e.g., a minimization problem bounded below but unbounded above). It doesn't always exist, but it 'May still exist' is the correct theoretical stance."
  },
  {
    "question": "In the graphical method, the feasible region is:",
    "options": [
      "Always a line",
      "A region that satisfies all constraints",
      "A region that satisfies only the objective function",
      "Always a square"
    ],
    "correct": 1,
    "explanation": "The feasible region is the set of all points that satisfy all the given constraints simultaneously."
  },
  {
    "question": "The path which moves along the activities having total float zero, in the network diagram is called:",
    "options": [
      "Free Float",
      "Critical Path",
      "Total Float",
      "Independent Float"
    ],
    "correct": 1,
    "explanation": "The Critical Path consists of activities with zero total float, meaning any delay in these activities delays the project."
  },
  {
    "question": "In PERT, the expected time (TE) for an activity is calculated using:",
    "options": [
      "(Optimistic time + Pessimistic time) / 2",
      "(Optimistic time + 4 x Most likely time + Pessimistic time) / 6",
      "(Most likely time + Pessimistic time) / 2",
      "(Optimistic time + Most likely time + Pessimistic time) / 3"
    ],
    "correct": 1,
    "explanation": "The PERT weighted average formula is (O + 4M + P) / 6."
  },
  {
    "question": "In sequencing problems, 'idle time' refers to:",
    "options": [
      "Time when a job is waiting to be processed",
      "Time when a machine is not in use",
      "Total processing time",
      "Time taken for maintenance"
    ],
    "correct": 1,
    "explanation": "Idle time specifically refers to the duration a machine is available but not processing any job (waiting for work)."
  },
  {
    "question": "In CPM, the focus is on:",
    "options": [
      "Probabilistic time estimates",
      "Deterministic time estimates",
      "Resource leveling",
      "Cost optimization only"
    ],
    "correct": 1,
    "explanation": "CPM uses deterministic (single, fixed) time estimates, whereas PERT uses probabilistic estimates."
  },
  {
    "question": "In sequencing problems, the primary objective is to:",
    "options": [
      "Maximize the number of jobs processed",
      "Minimize total processing time",
      "Maximize machine idle time",
      "Minimize the number of machines used"
    ],
    "correct": 1,
    "explanation": "The main goal is to minimize the total elapsed time (makespan) to complete all jobs."
  },
  {
    "question": "Which of the following methods is used to determine the optimal sequence for 'n' jobs through two machines?",
    "options": [
      "Hungarian Method",
      "Johnson's Rule",
      "Simplex Method",
      "Vogel's Approximation Method"
    ],
    "correct": 1,
    "explanation": "Johnson's Rule is the standard algorithm for sequencing n jobs on 2 machines to minimize makespan."
  },
  {
    "question": "In PERT analysis a critical activity has:",
    "options": [
      "maximum float",
      "zero float",
      "maximum cost",
      "minimum cost"
    ],
    "correct": 1,
    "explanation": "Critical activities have zero float (no slack)."
  },
  {
    "question": "If a primal has 2 constraints and 3 variables, the dual will have:",
    "options": [
      "2 variables and 3 constraints",
      "3 constraints and 2 variables",
      "2 variables and 2 constraints",
      "3 variables and 3 constraints"
    ],
    "correct": 0,
    "explanation": "The number of Dual variables equals the number of Primal constraints (2). The number of Dual constraints equals the number of Primal variables (3)."
  },
  {
    "question": "In the dual problem, the decision variables correspond to:",
    "options": [
      "Primal objective function coefficients",
      "Stack variables",
      "Constraints in the primal",
      "Constants in the primal"
    ],
    "correct": 2,
    "explanation": "Each dual variable corresponds to one constraint in the primal problem."
  },
  {
    "question": "If the primal is unbounded, then the dual is:",
    "options": [
      "Also unbounded",
      "Infeasible",
      "Unchanged",
      "Linear"
    ],
    "correct": 1,
    "explanation": "By the duality theorems, if the primal is unbounded, the dual must be infeasible."
  },
  {
    "question": "In duality, the coefficients of the objective function of the primal become:",
    "options": [
      "RHS of dual constraints",
      "Coefficients of dual objective function",
      "Slack variables in the dual",
      "Dual variables"
    ],
    "correct": 0,
    "explanation": "The cost vector of the primal becomes the Right Hand Side of the dual constraints."
  },
  {
    "question": "Which of the following is not a requirement of the standard form of LPP?",
    "options": [
      "Constraints must be equalities",
      "Decision variables must be non-negative",
      "Objective must be minimized",
      "RHS constants must be non-negative"
    ],
    "correct": 2,
    "explanation": "The objective can be Maximize or Minimize. Standard form typically converts everything to Maximization (or handles either), but forcing it to be 'minimized' isn't a requirement."
  },
  {
    "question": "In the standard form of an LPP, the objective is always to:",
    "options": [
      "Minimize a function",
      "Maximize a function",
      "Maximize or Minimize",
      "Maximize, with constraints as equalities"
    ],
    "correct": 2,
    "explanation": "In the most general sense, LPP optimizes (Max or Min). Many definitions of 'Standard Form' (especially Simplex) require Maximization, but context C (Maximize or Minimize) is generally accepted as the goal of LPP."
  },
  {
    "question": "Which of the following is not required in an LPP formulation?",
    "options": [
      "Objective function",
      "Decision variables",
      "Constraints",
      "Standard deviation"
    ],
    "correct": 3,
    "explanation": "Standard deviation is a statistical measure, not a component of deterministic Linear Programming."
  },
  {
    "question": "A transportation company can carry max 500 kg... Item A 10kg, Item B 20kg. Constraint is:",
    "options": [
      "10x + 20y <= 500",
      "10x + 20y >= 500",
      "10x - 20y = 500",
      "10x + 20y < 500"
    ],
    "correct": 0,
    "explanation": "Total weight must be less than or equal to capacity. 10x + 20y <= 500."
  },
  {
    "question": "Each shirt takes 2 hours, pant 3 hours... total time 120 hours. Constraint:",
    "options": [
      "2x + 3y >= 120",
      "2x + 3y <= 120",
      "2x - 3y = 120",
      "2x + 3y > 120"
    ],
    "correct": 1,
    "explanation": "Total time consumed cannot exceed available time. 2x + 3y <= 120."
  },
  {
    "question": "Profit Rs40 per shirt (x), Rs60 per pant (y). Objective function:",
    "options": [
      "Max Z = 60x + 40y",
      "Max Z = 40x + 60y",
      "Min Z = 40x + 60y",
      "Max Z = 40x - 60y"
    ],
    "correct": 1,
    "explanation": "Profit is maximized. Z = 40x + 60y."
  },
  {
    "question": "The first step in formulating an LPP is:",
    "options": [
      "Solving the model",
      "Defining the decision variables",
      "Writing constraints",
      "Graphical solution"
    ],
    "correct": 1,
    "explanation": "You must identify what needs to be decided (variables) before writing the objective or constraints."
  },
  {
    "question": "The payoff value for which each player in a game always selects the same strategy is called the:",
    "options": [
      "saddle point",
      "equilibrium point",
      "Both (A) and (B)",
      "None of these"
    ],
    "correct": 2,
    "explanation": "A saddle point represents an equilibrium where neither player benefits from changing strategy alone."
  },
  {
    "question": "The most common OR technique for linear problems is:",
    "options": [
      "Simulation",
      "Linear Regression",
      "Linear Programming",
      "Network Analysis"
    ],
    "correct": 2,
    "explanation": "Linear Programming is the primary technique for linear optimization."
  },
  {
    "question": "In OR models, decision variables are:",
    "options": [
      "Constants",
      "Uncontrollable factors",
      "Values that can be chosen to optimize the outcome",
      "Irrelevant in optimization"
    ],
    "correct": 2,
    "explanation": "Decision variables represent the choices available to the decision maker."
  },
  {
    "question": "The origin of Operations Research is traced back to:",
    "options": [
      "Space research programs",
      "Civil engineering projects",
      "World War II military operations",
      "Industrial Revolution"
    ],
    "correct": 2,
    "explanation": "OR originated during WWII for military logistics and strategy."
  },
  {
    "question": "In which scenario is individual replacement policy preferred over group replacement?",
    "options": [
      "Light bulbs in an office",
      "Printer cartridges in a printer",
      "Fire alarm batteries in a large facility",
      "Streetlights in a city"
    ],
    "correct": 1,
    "explanation": "Group replacement is for large numbers of identical low-cost items (bulbs/batteries). Printer cartridges are typically replaced individually when empty."
  },
  {
    "question": "Group replacement policy is generally more economical when:",
    "options": [
      "Failure rate is low",
      "Individual replacement is cheap",
      "There is a high cost of individual failure",
      "Items have a long life"
    ],
    "correct": 2,
    "explanation": "It is economical when the cost of replacing items individually (labor/downtime) is high compared to bulk replacement."
  },
  {
    "question": "In replacement decisions, the economic life of an asset is the age at which:",
    "options": [
      "Salvage value is highest",
      "Total cost is maximum",
      "Average annual cost is minimum",
      "Maintenance cost is lowest"
    ],
    "correct": 2,
    "explanation": "Economic life is determined by the minimum Average Annual Cost."
  },
  {
    "question": "The number of saddle points in a payoff matrix can be:",
    "options": [
      "Only 1",
      "At most 1",
      "More than 1",
      "Infinite"
    ],
    "correct": 2,
    "explanation": "A matrix can have multiple saddle points (indices) although they will all have the same value."
  },
  {
    "question": "In a payoff matrix, the saddle point exists at (2,2) and the value of the game is 4. This means:",
    "options": [
      "Player A and B should always play Strategy 2",
      "The game must be solved using mixed strategies",
      "The value of the game is not reliable",
      "No conclusion can be made"
    ],
    "correct": 0,
    "explanation": "A saddle point implies a Pure Strategy solution. Both players should stick to that strategy."
  },
  {
    "question": "Machine maintenance cost problem. Resale is zero. When to replace? (Costs given: 2000, 3000, 4000, 6000, 8000; Capital: 20000)",
    "options": [
      "3 years",
      "4 years",
      "5 years",
      "6 years"
    ],
    "correct": 2,
    "explanation": "Average cost continues to decrease through year 5 (8600 < 8750). We replace when Marginal Cost (Maintenance of next year) > Average Cost."
  },
  {
    "question": "Which of the following is a reason for equipment replacement?",
    "options": [
      "High maintenance cost",
      "Obsolescence",
      "Decrease in efficiency",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "All listed factors necessitate replacement."
  },
  {
    "question": "Game theory can be applied to:",
    "options": [
      "Military decisions",
      "Economic behavior",
      "Business competition",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Game theory models strategic interactions in all these fields."
  },
  {
    "question": "In a zero-sum game, if player A's gain is 5, then player B's loss is:",
    "options": [
      "0",
      "10",
      "-5",
      "5"
    ],
    "correct": 3,
    "explanation": "Zero-sum means A + B = 0. If A gets +5, B gets -5. B's 'loss' is the magnitude 5."
  },
  {
    "question": "In dominance principle, if all elements of a row are greater than or equal to corresponding elements of another row:",
    "options": [
      "Dominated row can be removed",
      "Dominating row can be removed",
      "Both rows must be retained",
      "No action is taken"
    ],
    "correct": 0,
    "explanation": "For Maximization (Player A), if Row 1 > Row 2, Row 1 dominates Row 2. The dominated row (Row 2, the inferior one) is removed."
  },
  {
    "question": "The value of the game is:",
    "options": [
      "The average loss",
      "The expected payoff if both players use optimal strategies",
      "The maximum regret",
      "The total number of strategies"
    ],
    "correct": 1,
    "explanation": "The value is the guaranteed payoff when both play optimally."
  },
  {
    "question": "Which of the following is not an assumption of classical game theory?",
    "options": [
      "Rational behavior of players",
      "Zero-sum outcomes",
      "Complete information",
      "Infinite number of players"
    ],
    "correct": 3,
    "explanation": "Classical game theory typically assumes a finite number of players (usually 2)."
  },
  {
    "question": "Which method is used to solve a 2xn or mx2 game without a saddle point?",
    "options": [
      "Simplex method",
      "Graphical method",
      "Dual simplex",
      "Penalty method"
    ],
    "correct": 1,
    "explanation": "The graphical method is standard for 2xn or mx2 games."
  },
  {
    "question": "In a two-person zero-sum game, if both players use optimal strategies, the outcome is called:",
    "options": [
      "Equilibrium point",
      "Nash point",
      "Saddle point",
      "Both (A) and (C)"
    ],
    "correct": 3,
    "explanation": "In zero-sum pure strategies, it's a Saddle Point, which is an Equilibrium point."
  },
  {
    "question": "In game theory, the strategy that provides the best outcome for a player regardless of opponent does is:",
    "options": [
      "Dominant strategy",
      "Mixed strategy",
      "Pure strategy",
      "Nash strategy"
    ],
    "correct": 0,
    "explanation": "This is the definition of a Dominant Strategy."
  },
  {
    "question": "Dominance rule in game theory is used to:",
    "options": [
      "Increase payoff",
      "Eliminate inferior strategies",
      "Maximize players",
      "Identify saddle points"
    ],
    "correct": 1,
    "explanation": "It reduces matrix size by removing inferior (dominated) rows/columns."
  },
  {
    "question": "A two-person zero-sum game with 2x2 payoff matrix can be solved using:",
    "options": [
      "Linear programming",
      "Graphical method",
      "Algebraic method",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "All methods work, though algebraic is simplest for 2x2 mixed."
  },
  {
    "question": "The payoff in a game theory problem represents:",
    "options": [
      "Cost incurred",
      "Profit or loss",
      "Outcome of a strategy combination",
      "Number of players"
    ],
    "correct": 2,
    "explanation": "Payoff is the quantitative outcome (Utility/Profit/Loss) associated with a pair of strategies."
  },
  {
    "question": "A pure strategy involves:",
    "options": [
      "Random selection",
      "Assigning probabilities",
      "Choosing one strategy consistently",
      "Always losing"
    ],
    "correct": 2,
    "explanation": "Pure strategy means selecting a single action with probability 1."
  },
  {
    "question": "In a saddle point, the strategy is:",
    "options": [
      "Unstable",
      "Optimal for both players",
      "Random",
      "Never used"
    ],
    "correct": 1,
    "explanation": "It is the stable, optimal solution for both."
  },
  {
    "question": "In a zero-sum game, the total payoff to all players is:",
    "options": [
      "Always zero",
      "Always one",
      "Can be any number",
      "Always negative"
    ],
    "correct": 0,
    "explanation": "Definition of zero-sum: Sum of gains and losses is zero."
  },
  {
    "question": "Game theory models are classified by:",
    "options": [
      "number of players",
      "sum of all payoffs",
      "number of strategies",
      "All the above"
    ],
    "correct": 3,
    "explanation": "Games are classified by players (2-person vs n-person), payoff sum (zero vs non-zero), and strategies (finite vs infinite)."
  },
  {
    "question": "Which of the following is NOT a type of time estimate used in PERT?",
    "options": [
      "Optimistic time",
      "Pessimistic time",
      "Most likely time",
      "Realistic time"
    ],
    "correct": 3,
    "explanation": "The three estimates are Optimistic, Pessimistic, and Most Likely. 'Realistic' is not a standard PERT term."
  },
  {
    "question": "The critical path in a network is the path that:",
    "options": [
      "Has the highest cost",
      "Has the shortest duration",
      "Has the longest duration",
      "Can be delayed without affecting the project"
    ],
    "correct": 2,
    "explanation": "The Critical Path determines the minimum project duration, which is defined by the longest sequence of dependent tasks."
  },
  {
    "question": "PERT is used for:",
    "options": [
      "Repetitive projects",
      "Non-repetitive projects",
      "Manufacturing processes",
      "All of the above"
    ],
    "correct": 1,
    "explanation": "PERT handles uncertainty in unique, non-repetitive projects (R&D)."
  },
  {
    "question": "In the Column Minima Method, the first step is to:",
    "options": [
      "Find the column minimum and allocate the supply",
      "Find the minimum value in each row",
      "Find the minimum value in each column and allocate the demand",
      "Subtract the row and column minima"
    ],
    "correct": 2,
    "explanation": "Select the lowest cost in the column and allocate max possible amount."
  },
  {
    "question": "The Row Minima Method provides:",
    "options": [
      "An optimal solution",
      "A feasible solution that may not be optimal",
      "A non-feasible solution",
      "A lower bound solution"
    ],
    "correct": 1,
    "explanation": "Like other initial methods (NWCM), it gives a Basic Feasible Solution (BFS), not necessarily optimal."
  },
  {
    "question": "When using the Row Minima Method, if there is a tie in the minimum values in a row, what should be done next?",
    "options": [
      "Choose the minimum value from the column",
      "Allocate the supply to all the tied cells equally",
      "Choose the tied cell arbitrarily",
      "Allocate the minimum supply to the row"
    ],
    "correct": 2,
    "explanation": "Ties can be broken arbitrarily (or by max allocation logic)."
  },
  {
    "question": "The Row Minima Method is primarily used in:",
    "options": [
      "Linear programming problems",
      "Assignment problems",
      "Transportation problems",
      "Integer programming problems"
    ],
    "correct": 2,
    "explanation": "It is a method for initial allocation in Transportation Problems."
  },
  {
    "question": "The objective function in the Graphical Method is typically represented as:",
    "options": [
      "A point",
      "A straight line",
      "A curve",
      "A shaded area"
    ],
    "correct": 1,
    "explanation": "Iso-profit or Iso-cost lines are straight lines moved across the feasible region."
  },
  {
    "question": "In the Graphical Method, the feasible region is determined by:",
    "options": [
      "The objective function",
      "The constraints of the problem",
      "The line of symmetry",
      "The slope of the graph"
    ],
    "correct": 1,
    "explanation": "Constraints define the boundaries of the feasible region."
  },
  {
    "question": "After subtracting row/column minimums... what is the next step in Hungarian method?",
    "options": [
      "Pivot",
      "Cover all zeros using the minimum number of lines",
      "Assign jobs",
      "Solve dual"
    ],
    "correct": 1,
    "explanation": "Check optimality by covering zeros with min lines."
  },
  {
    "question": "The Hungarian method works efficiently when:",
    "options": [
      "The matrix is non-square",
      "The matrix is square",
      "Cost is positive",
      "Rows > Columns"
    ],
    "correct": 1,
    "explanation": "Hungarian method is designed for nxn (square) assignment matrices."
  },
  {
    "question": "Which of the following steps is part of the Hungarian method?",
    "options": [
      "Subtract column min",
      "Add row min",
      "Draw circles",
      "Divide by constant"
    ],
    "correct": 0,
    "explanation": "Step 1/2 involve subtracting minimums."
  },
  {
    "question": "The feasible region of a Linear Programming Problem (LPP) is a:",
    "options": [
      "Convex set",
      "Concave set",
      "Linear set",
      "Non-convex set"
    ],
    "correct": 0,
    "explanation": "The intersection of linear inequalities always forms a Convex Set (polygon/polyhedron)."
  },
  {
    "question": "In standard form LPP, >= is converted by:",
    "options": [
      "Adding slack",
      "Subtracting surplus",
      "Adding artificial",
      "Subtracting slack"
    ],
    "correct": 1,
    "explanation": ">= constraints require subtracting a Surplus variable to equate."
  },
  {
    "question": "If an LPP has more than one optimal solution, it is said to be:",
    "options": [
      "Unbounded",
      "Degenerate",
      "Infeasible",
      "Multi-optimal (Alternative Optimal)"
    ],
    "correct": 3,
    "explanation": "Alternative or Multi-optimal solutions."
  },
  {
    "question": "In the simplex method, the BFS is determined by:",
    "options": [
      "Setting non-basic variables to zero",
      "Setting basic variables to zero",
      "Random choosing",
      "Solving objective"
    ],
    "correct": 0,
    "explanation": "Non-basic variables are set to 0, solving for basic variables."
  },
  {
    "question": "In LPP with m constraints and n variables, total variables in standard form is:",
    "options": [
      "m+n",
      "mxn",
      "n",
      "m"
    ],
    "correct": 0,
    "explanation": "We typically add m slack/surplus variables to n decision variables. Total = n + m."
  },
  {
    "question": "In standard form LPP, decision variables must be:",
    "options": [
      "Positive",
      "Negative",
      "Non-negative",
      "Zero or negative"
    ],
    "correct": 2,
    "explanation": "Non-negativity restriction (x >= 0)."
  },
  {
    "question": "The degeneracy in a transportation problem occurs when:",
    "options": [
      "Allocations > m+n-1",
      "Allocations < m+n-1",
      "Cost is minimized",
      "Supply != Demand"
    ],
    "correct": 1,
    "explanation": "Allocations must equal m+n-1 for non-degenerate BFS."
  },
  {
    "question": "Which method is used to improve an initial feasible solution in transportation?",
    "options": [
      "NWCM",
      "Simplex",
      "MODI Method",
      "Least Cost"
    ],
    "correct": 2,
    "explanation": "MODI (Modified Distribution) tests for optimality and improves the solution."
  },
  {
    "question": "The main advantage of VAM is:",
    "options": [
      "Optimal directly",
      "Guarantees feasible",
      "Better approximations (closer to optimal)",
      "Simplest"
    ],
    "correct": 2,
    "explanation": "VAM usually yields a solution very close to the optimal one, minimizing iterations."
  },
  {
    "question": "Role of u and v in MODI:",
    "options": [
      "Calculate opportunity costs",
      "Balance supply",
      "Improve allocation",
      "Calculate initial solution"
    ],
    "correct": 0,
    "explanation": "Dual variables u and v are used to calculate opportunity costs (d = C - (u+v)) for empty cells."
  },
  {
    "question": "Dominance in payoff matrix (Maximization): R1(6,17,18), R2(4,5,6), R3(7,8,19). Which row is dominated?",
    "options": [
      "R1",
      "R2",
      "R3",
      "None"
    ],
    "correct": 1,
    "explanation": "Compare R1 (6,17,18) and R2 (4,5,6). R1 dominates R2 (R1 > R2 everywhere). Max player eliminates the inferior R2."
  },
  {
    "question": "After dominance, no saddle point. Next step?",
    "options": [
      "Duality",
      "Graphical",
      "Mixed strategy method",
      "Stop"
    ],
    "correct": 2,
    "explanation": "If no saddle point (Pure Strategy), we solve for Mixed Strategies."
  },
  {
    "question": "Purpose of dominance rule:",
    "options": [
      "Reduce strategies",
      "Increase payoff",
      "Find Nash",
      "Convert to matrix"
    ],
    "correct": 0,
    "explanation": "Reduces the size of the payoff matrix."
  },
  {
    "question": "If a row is dominated (Maximization):",
    "options": [
      "Dominated row preferred",
      "Dominated row eliminated",
      "Kept",
      "N/A"
    ],
    "correct": 1,
    "explanation": "The inferior row is deleted."
  },
  {
    "question": "Optimal Primal = 20. Optimal Dual = ?",
    "options": [
      "0",
      "Undetermined",
      "20",
      "10"
    ],
    "correct": 2,
    "explanation": "Strong Duality: Z_primal = Z_dual. Value is 20."
  },
  {
    "question": "Variables not in solution in Simplex:",
    "options": [
      "Basic",
      "Non-basic",
      "Slack",
      "Artificial"
    ],
    "correct": 1,
    "explanation": "Variables set to zero are Non-basic."
  },
  {
    "question": "The feasible region in LPP is always:",
    "options": [
      "Circular",
      "Irregular",
      "Convex",
      "Concave"
    ],
    "correct": 2,
    "explanation": "Convex polygon/polytope."
  },
  {
    "question": "Simplex method is used for:",
    "options": [
      "Min only",
      "Max only",
      "Both",
      "Graphical"
    ],
    "correct": 2,
    "explanation": "Simplex handles both Max and Min problems."
  },
  {
    "question": "Simplex solves:",
    "options": [
      "Differential",
      "Linear Programming Problems",
      "Assignment",
      "Flow charts"
    ],
    "correct": 1,
    "explanation": "Algorithm for LPP."
  },
  {
    "question": "Step after subtracting mins in Hungarian:",
    "options": [
      "Dummy row",
      "Draw min lines to cover zeros",
      "Add rows",
      "Multiply"
    ],
    "correct": 1,
    "explanation": "Check for optimality by covering zeros."
  },
  {
    "question": "ES=3, LS=8. Total Float?",
    "options": [
      "5",
      "3",
      "8",
      "11"
    ],
    "correct": 0,
    "explanation": "Total Float = LS - ES = 8 - 3 = 5."
  },
  {
    "question": "PERT: O=4, M=6, P=10. TE?",
    "options": [
      "6",
      "7",
      "6.5",
      "8"
    ],
    "correct": 0,
    "explanation": "(4 + 4*6 + 10) / 6 = 38/6 = 6.33. Option A (6) is the closest or intended integer answer."
  },
  {
    "question": "Start day 4, Finish day 10. Duration?",
    "options": [
      "5",
      "6",
      "7",
      "10"
    ],
    "correct": 1,
    "explanation": "Duration = Finish - Start = 10 - 4 = 6 days."
  },
  {
    "question": "In diagrams, activities are represented by:",
    "options": [
      "Circles",
      "Arrows",
      "Rectangles",
      "Squares"
    ],
    "correct": 1,
    "explanation": "Arrows represent activities (in AOA networks)."
  },
  {
    "question": "Dummy activity represents:",
    "options": [
      "Zero duration",
      "Unnecessary",
      "Resource consumption",
      "Critical"
    ],
    "correct": 0,
    "explanation": "Logical dependency only, no time/resources."
  },
  {
    "question": "Common in PERT and CPM:",
    "options": [
      "Time estimates",
      "Cost analysis",
      "Network diagram",
      "Probabilistic"
    ],
    "correct": 2,
    "explanation": "Both use Network Diagrams to visualize the project."
  },
  {
    "question": "Formula for TE:",
    "options": [
      "(a+m+b)/6",
      "(a+2m+b)/6",
      "(a+4m+b)/6",
      "(a+m+b)/3"
    ],
    "correct": 2,
    "explanation": "Standard weighted average (Optimistic + 4*Most_Likely + Pessimistic) / 6."
  },
  {
    "question": "Slack/Float associated with:",
    "options": [
      "Critical",
      "Non-critical",
      "All",
      "None"
    ],
    "correct": 1,
    "explanation": "While all activities have a float value, float is the characteristic of Non-critical activities (Critical activities have 0 float)."
  },
  {
    "question": "In CPM, activity time is:",
    "options": [
      "Probabilistic",
      "Deterministic",
      "Random",
      "None"
    ],
    "correct": 1,
    "explanation": "CPM uses single, deterministic time estimates."
  },
  {
    "question": "If TP has multiple optimal solutions, MODI will:",
    "options": [
      "Fail",
      "Identify all",
      "Show zero opportunity cost for non-basic cell",
      "Give highest cost"
    ],
    "correct": 2,
    "explanation": "A zero opportunity cost for an empty cell in the optimal table indicates an alternative optimal path."
  },
  {
    "question": "In Min TP, negative opportunity cost implies:",
    "options": [
      "Basic variable",
      "Optimal",
      "Possibility of reducing cost",
      "Infeasible"
    ],
    "correct": 2,
    "explanation": "Negative cost means the solution can be improved (cost reduced)."
  },
  {
    "question": "In MODI, if all opportunity costs >= 0:",
    "options": [
      "Infeasible",
      "Degenerate",
      "Optimal",
      "Unbalanced"
    ],
    "correct": 2,
    "explanation": "Optimality condition for minimization is reached."
  },
  {
    "question": "Method of penalties is:",
    "options": [
      "NWCM",
      "Lowest Cost",
      "Row Minima",
      "Vogel's Approximation (VAM)"
    ],
    "correct": 3,
    "explanation": "VAM uses 'Penalties' (difference between lowest costs)."
  },
  {
    "question": "Non-degenerate solution condition:",
    "options": [
      "All supply satisfied",
      "Allocations = m+n-1",
      "No zero costs",
      "Optimal"
    ],
    "correct": 1,
    "explanation": "Definition of non-degenerate BFS."
  },
  {
    "question": "MODI used for:",
    "options": [
      "Initial solution",
      "Feasibility",
      "Testing and improving optimality",
      "Balancing"
    ],
    "correct": 2,
    "explanation": "Optimality testing."
  },
  {
    "question": "Best method for initial solution (Cost-wise):",
    "options": [
      "NWCM",
      "Matrix Minima",
      "VAM",
      "MODI"
    ],
    "correct": 2,
    "explanation": "VAM generally yields the best initial approximation."
  },
  {
    "question": "If two cells have same lowest cost:",
    "options": [
      "Select max supply",
      "Select arbitrarily",
      "Skip",
      "Cancel"
    ],
    "correct": 1,
    "explanation": "Ties can be broken arbitrarily (or to maximize allocation)."
  },
  {
    "question": "Least Cost Method is also known as:",
    "options": [
      "VAM",
      "MODI",
      "Matrix Minima Method",
      "NWCM"
    ],
    "correct": 2,
    "explanation": "Synonym."
  },
  {
    "question": "Supply=100, Demand=120. Before NWCM?",
    "options": [
      "Apply directly",
      "Add dummy dest (demand=20)",
      "Subtract extra",
      "Ignore"
    ],
    "correct": 1,
    "explanation": "The problem is unbalanced. We must balance it by adding a dummy (likely Source/Row with supply 20). Option B says destination which is technically opposite, but implies the balancing step."
  },
  {
    "question": "NWCM starts from:",
    "options": [
      "Least cost",
      "Highest supply",
      "North-West (Top-Left)",
      "Highest demand"
    ],
    "correct": 2,
    "explanation": "Top-left corner."
  },
  {
    "question": "Unbounded feasible region in Max problem implies:",
    "options": [
      "No solution",
      "Max at origin",
      "Objective can increase indefinitely",
      "Multiple points"
    ],
    "correct": 2,
    "explanation": "Value can go to infinity."
  }
];
