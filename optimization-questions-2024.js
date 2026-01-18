const optimizationQuestions2024 = [
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
    },
    {
        question: "Operations Research, which is a very powerful tool for:",
        options: [
            "(A) Decision - Making",
            "(B) Operations",
            "(C) Research",
            "(D) None of the above"
        ],
        answer: "(A)",
        explanation: "OR provides a scientific basis for decision-making."
    },
    {
        question: "______ may be defined as a method of determining an optimum programme interdependent activities in view of available resources.",
        options: [
            "(A) Linear Programming",
            "(B) Goal Programming",
            "(C) Decision-Making",
            "(D) None of the above"
        ],
        answer: "(A)",
        explanation: "This is a description of Linear Programming."
    },
    {
        question: "When a doctor attends to an emergency case leaving his regular service is called:",
        options: [
            "(A) Reneging",
            "(B) Balking",
            "(C) Pre-emptive queue discipline",
            "(D) Non-Pre-Emptive queue discipline"
        ],
        answer: "(C)",
        explanation: "Pre-emption implies interrupting the current service to handle a higher-priority task."
    },
    {
        question: "This department is responsible for the development of queuing theory:",
        options: [
            "(A) Railway station",
            "(B) Municipal office",
            "(C) Telephone department",
            "(D) Health department"
        ],
        answer: "(C)",
        explanation: "A.K. Erlang developed queuing theory to analyze telephone traffic."
    },
    {
        question: "Arrival-->Service-->Service-->Service -->Out-->The given sequence represents:",
        options: [
            "(A) Single-channel Single-phase system",
            "(B) Multi-channel Single-phase system",
            "(C) Single-channel Multi-phase system",
            "(D) Multi-channel Multi-phase system"
        ],
        answer: "(C)",
        explanation: "A customer passing through a sequence of services (series) represents a Multi-phase system. If there is one line entering, it's Single-channel."
    },
    {
        question: "The distribution of arrivals in a queuing system can be considered as a:",
        options: [
            "(A) Death Process",
            "(B) Pure Birth Process",
            "(C) Pure Live Process",
            "(D) Sick Process"
        ],
        answer: "(B)",
        explanation: "A process counting only arrivals (no departures) is a Pure Birth Process. (Often Poisson distributed)."
    },
    {
        question: "The unit of traffic intensity is :",
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
        question: "______ is concerned with the determination of the most economic replacement policy.",
        options: [
            "(A) Probabilistic programming",
            "(B) Linear programming",
            "(C) Search theory",
            "(D) Replacement theory"
        ],
        answer: "(D)",
        explanation: "Replacement Theory."
    },
    {
        question: "If Dual has a solution, then the primal will:",
        options: [
            "(A) Not have a solution",
            "(B) Have only basic feasible solution,",
            "(C) Have a solution",
            "(D) None of these"
        ],
        answer: "(C)",
        explanation: "By the Strong Duality Theorem, if one problem has an optimal solution, the other also has an optimal solution."
    },
    {
        question: "If the primal has an unbounded solution, then the dual has :",
        options: [
            "(A) Optimal solution",
            "(B) No feasible solution",
            "(C) Bound solution",
            "(D) None of these"
        ],
        answer: "(B)",
        explanation: "If the Primal is Unbounded, the Dual is Infeasible."
    },
    {
        question: "To transfer the key row in simplex table we have to:",
        options: [
            "(A) Add the elements of the key row to the key number",
            "(B) Subtract the elements of a key row from topmost no key row",
            "(C) Divide the elements of the key row by the key number",
            "(D) None of these"
        ],
        answer: "(C)",
        explanation: "The new key row is obtained by dividing the old key row elements by the Pivot (Key) Number."
    },
    {
        question: "Primal of a Primal is:",
        options: [
            "(A) Primal",
            "(B) Dual",
            "(C) Primal-Dual",
            "(D) Duo primal"
        ],
        answer: "(A)",
        explanation: "The primal of the primal is itself. (The Dual of the Dual is the Primal)."
    },
    {
        question: "The person who coined the name Operations Research is:",
        options: [
            "(A) Bellman",
            "(B) Newman",
            "(C) McClosky and Trefrhen",
            "(D) None of these"
        ],
        answer: "(C)",
        explanation: "McClosky and Trefrhen are widely credited with coining/popularizing the term in 1940."
    },
    {
        question: "Operations Research is the art of giving:",
        options: [
            "(A) Good answers for war problems",
            "(B) Bad answers to war problems",
            "(C) Bad answers to problems where otherwise worse answers are given",
            "(D) Good answers to problems where otherwise bad answers are given"
        ],
        answer: "(C)",
        explanation: "A famous quote describing OR: \"The art of giving bad answers to problems which otherwise have worse answers.\""
    },
    {
        question: "One of the properties of the O.R. model is:",
        options: [
            "(A) The model should be complicated",
            "(B) Model is structured to suit O.R. techniques",
            "(C) The model should be structured to suit all the problems we come across",
            "(D) The model should be easy to derive"
        ],
        answer: "(B)",
        explanation: "Models are designed specifically to be solvable by available OR techniques."
    },
    {
        question: "The cost coefficient of the artificial surplus variable is:",
        options: [
            "(A) 0",
            "(B) 1",
            "(C) M",
            "(D) > than 1"
        ],
        answer: "(C)",
        explanation: "In the Big-M method, artificial variables are assigned a very high cost M (usually +M for minimization, -M for maximization)."
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
        explanation: "The Modified Distribution (MODI) method is used for the optimality test."
    },
    {
        question: "Economic order quantity results in:",
        options: [
            "(A) equalisation of carrying cost and procurement cost",
            "(B) favourable procurement price",
            "(C) reduced chances of stock outs",
            "(D) minimization of set up cost"
        ],
        answer: "(A)",
        explanation: "At EOQ, Annual Ordering (Procurement) Cost = Annual Carrying Cost."
    },
    {
        question: "The problem of replacement is felt when job performing units fail:",
        options: [
            "(A) suddenly and gradually",
            "(B) gradually",
            "(C) suddenly",
            "(D) neither gradually nor suddenly"
        ],
        answer: "(A)",
        explanation: "Replacement theory covers items that deteriorate gradually (machines) and those that fail suddenly (bulbs)."
    },
    {
        question: "The time between the placement of an order and its delivery is called as:",
        options: [
            "(A) buffer time",
            "(B) lead time",
            "(C) Economic Order Quantity",
            "(D) capital time"
        ],
        answer: "(B)",
        explanation: "Definition of Lead Time."
    },
    {
        question: "All of the following are assumptions of the EOQ model except:",
        options: [
            "(A) the usage rate is reasonably constant",
            "(B) replenishment is not instantaneous",
            "(C) only one product is involved",
            "(D) there are no quantity discount prices"
        ],
        answer: "(B)",
        explanation: "The standard EOQ model assumes instantaneous replenishment (lead time is zero or fixed, but stock arrives all at once). Option B (\"not instantaneous\") contradicts this."
    },
    {
        question: "The dual of the dual is:",
        options: [
            "(A) dual-primal",
            "(B) primal-dual",
            "(C) dual",
            "(D) primal"
        ],
        answer: "(D)",
        explanation: "Fundamental theorem: Dual of Dual = Primal."
    },
    {
        question: "When the total demand is not equal to supply then it is said to be:",
        options: [
            "(A) balanced",
            "(B) unbalanced",
            "(C) maximization",
            "(D) minimization"
        ],
        answer: "(B)",
        explanation: "Demand != Supply means Unbalanced transportation problem."
    },
    {
        question: "The group replacement policy is suitable for identical low cost items which are likely to:",
        options: [
            "(A) fail suddenly",
            "(B) fail completely and suddenly",
            "(C) fail over a period of time",
            "(D) be progressive and retrogressive"
        ],
        answer: "(B)",
        explanation: "Group replacement is used for items like light bulbs which fail suddenly and completely."
    },
    {
        question: "Which of the following is not a part of holding (or carrying) costs?",
        options: [
            "(A) Rent for storage space",
            "(B) Extra expenses for an overnight express mail.",
            "(C) Spoilage costs",
            "(D) Electricity and heat for the buildings"
        ],
        answer: "(B)",
        explanation: "Overnight mail is an Ordering or expediting cost, not a cost of holding inventory."
    },
    {
        question: "Priority queue discipline may be classified as:",
        options: [
            "(A) finite or infinite",
            "(B) limited and unlimited",
            "(C) pre-emptive or non-pre-emptive",
            "(D) All of the above"
        ],
        answer: "(C)",
        explanation: "Priority can be Pre-emptive (interrupt) or Non-pre-emptive (wait)."
    },
    {
        question: "Which symbol describes the interarrival time distribution?",
        options: [
            "(A) D",
            "(B) M",
            "(C) G",
            "(D) All of the above"
        ],
        answer: "(B)",
        explanation: "In Kendall's notation (A/B/c), the first symbol (A) denotes interarrival distribution. M (Markovian/Exponential) is the standard symbol."
    },
    {
        question: "The calling population is assumed to be infinite when:",
        options: [
            "(A) arrivals are independent of each other",
            "(B) the capacity of the system is infinite",
            "(C) service rate is faster than the arrival rate",
            "(D) All of the above"
        ],
        answer: "(A)",
        explanation: "An infinite population implies that the arrival of one customer does not affect the probability of future arrivals (independence)."
    },
    {
        question: "A calling population is considered to be infinite when:",
        options: [
            "(A) all customers arrive at once",
            "(B) arrivals are independent of each other",
            "(C) arrivals are dependent upon each other",
            "(D) All of the above"
        ],
        answer: "(B)",
        explanation: "Same as previous question."
    },
    {
        question: "The cost of providing service in a queuing system decreases with:",
        options: [
            "(A) decreased average waiting time in the queue",
            "(B) decreased arrival rate",
            "(C) increased arrival rate",
            "(D) None of the above"
        ],
        answer: "(D)",
        explanation: "Service costs are generally fixed per server. Increasing service level (to reduce wait time) increases cost. Reducing arrival rate might reduce total variable cost, but \"Cost of providing service\" (capacity) is usually a function of service level."
    },
    {
        question: "Service mechanism in a queuing system is characterized by:",
        options: [
            "(A) server's behavior",
            "(B) customer's behavior",
            "(C) customers in the system",
            "(D) All of the above"
        ],
        answer: "(A)",
        explanation: "The service mechanism relates to the server's characteristics (speed, number, behavior)."
    },
    {
        question: "In M/M/S: N/FIFO the following does not apply:",
        options: [
            "(A) Poisson arrival",
            "(B) Limited service",
            "(C) Exponential service",
            "(D) Single server"
        ],
        answer: "(D)",
        explanation: "The 'S' in the notation stands for the number of servers. Since it is a variable 'S' (often implying S>1), the \"Single server\" restriction (which would be '1') does not apply generally."
    },
    {
        question: "The system of loading and unloading of goods usually follows:",
        options: [
            "(A) LIFO",
            "(B) FIFO",
            "(C) SIRO",
            "(D) SBP"
        ],
        answer: "(A)",
        explanation: "In a physical stack of goods (e.g., in a truck or warehouse), the last item loaded is the first one available to unload (LIFO)."
    },
    {
        question: "The characteristics of a queuing model are independent of:",
        options: [
            "(A) Number of service stations",
            "(B) Limit of the length of the queue",
            "(C) Service pattern",
            "(D) Queue discipline"
        ],
        answer: "(D)",
        explanation: "Wait, Queue Discipline affects individual wait times but often not average metrics in simple models like M/M/1. However, typically models depend on all. Given options, Queue Discipline is the best candidate."
    },
    {
        question: "Key element is also known as:",
        options: [
            "(A) slack",
            "(B) surplus",
            "(C) artificial",
            "(D) pivot"
        ],
        answer: "(D)",
        explanation: "The Key Element is the Pivot Element."
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
        explanation: "Basic feasible solution requires m+n-1 allocations."
    },
    {
        question: "The allocation cells in the transportation table will be called ______ cell.",
        options: [
            "(A) occupied",
            "(B) unoccupied",
            "(C) no",
            "(D) finite"
        ],
        answer: "(A)",
        explanation: "Cells with assignments are Occupied (Basic) cells."
    },
    {
        question: "The assignment algorithm was developed by ______ method.",
        options: [
            "(A) HUNGARIAN",
            "(B) VOGELS",
            "(C) MODI",
            "(D) TRAVELLING SALESMAN"
        ],
        answer: "(A)",
        explanation: "The Hungarian Method solves assignment problems."
    },
    {
        question: "An assignment problem is a particular case of:",
        options: [
            "(A) transportation problem",
            "(B) assignment problem",
            "(C) travelling salesman problem",
            "(D) replacement problem"
        ],
        answer: "(A)",
        explanation: "Assignment is a degenerate Transportation problem (m=n, supply/demand = 1)."
    },
    {
        question: "The coefficient of slack\\surplus variables in the objective function are always assumed to be:",
        options: [
            "(A) 0",
            "(B) 1",
            "(C) M",
            "(D) -M"
        ],
        answer: "(A)",
        explanation: "Slack/Surplus variables have a cost of 0 in the objective function."
    },
    {
        question: "Using ______ method, we can never have an unbounded solution.",
        options: [
            "(A) Simplex",
            "(B) Dual simplex",
            "(C) Big M",
            "(D) Modi"
        ],
        answer: "(C)",
        explanation: "Transportation problems (MODI) have finite supplies and demands, so they are never unbounded. However, Big M is a variant of Simplex for general LP. Standard Simplex can show unboundedness. Transportation (MODI) cannot."
    },
    {
        question: "A queuing system is said to be a ______ when its operating characteristics are independent upon time.",
        options: [
            "(A) pure birth model",
            "(B) pure death model",
            "(C) transient state",
            "(D) steady state"
        ],
        answer: "(D)",
        explanation: "Steady state means system behavior is stable and time-independent."
    },
    {
        question: "For a 2.5% increase in order quantity (under fundamental EOQ problem) the total relevant cost would:",
        options: [
            "(A) increase by 2.5%",
            "(B) decrease by 2.5%",
            "(C) increase by 0.25%",
            "(D) decrease by 0.25%"
        ],
        answer: "(C)",
        explanation: "Deviations from EOQ increase cost. For small deviations, the cost increase is proportional to the square of the deviation percentage."
    },
    {
        question: "In the basic EOQ model, if the lead time increases from 2 to 4 days, the EOQ will:",
        options: [
            "(A) double increase",
            "(B) remain constant",
            "(C) but not double",
            "(D) decrease by a factor of two"
        ],
        answer: "(B)",
        explanation: "EOQ depends on Demand, Ordering Cost, and Holding Cost. It is independent of Lead Time (which affects the Reorder Point, not the Quantity)."
    },
    {
        question: "Graphical method is also known as:",
        options: [
            "(A) Simplex Method",
            "(B) Dual Simplex Method",
            "(C) Big-M Method",
            "(D) Search-Approach Method"
        ],
        answer: "(D)",
        explanation: "Graphical method involves searching the feasible region's vertices."
    },
    {
        question: "If the given Linear Programming Problem is in its standard form then primal-dual pair is:",
        options: [
            "(A) symmetric",
            "(B) unsymmetric",
            "(C) square",
            "(D) triangle"
        ],
        answer: "(A)",
        explanation: "Standard primal (Max Z, <=) leads to Standard Dual (Min W, >=). This relationship is symmetric."
    },
    {
        question: "When the total demand is equal to supply then the transportation problem is said to be:",
        options: [
            "(A) balanced",
            "(B) unbalanced",
            "(C) maximization",
            "(D) minimization"
        ],
        answer: "(A)",
        explanation: "Balanced problem."
    },
    {
        question: "The server utilization factor is also known as:",
        options: [
            "(A) Erlang distribution",
            "(B) Poisson distribution",
            "(C) Exponential distribution",
            "(D) Traffic intensity"
        ],
        answer: "(D)",
        explanation: "Utilization factor is synonymous with Traffic Intensity."
    },
    {
        question: "The model in which only arrivals are counted and no departure takes place are called:",
        options: [
            "(A) pure birth model",
            "(B) pure death model",
            "(C) birth death model",
            "(D) death birth model"
        ],
        answer: "(A)",
        explanation: "Pure Birth Model."
    },
    {
        question: "An ______ represent the start or completion of some activity and as such it consumes no time.",
        options: [
            "(A) activity",
            "(B) event",
            "(C) slack",
            "(D) path"
        ],
        answer: "(B)",
        explanation: "An Event (node) marks a point in time (start/end) and consumes no resources."
    },
    {
        question: "The dummy source or destination in a transportation problem is added to:",
        options: [
            "(A) satisfy rim conditions",
            "(B) prevent solution from becoming degenerate",
            "(C) ensure that total cost does not exceed a limit",
            "(D) the solution not be degenerate"
        ],
        answer: "(A)",
        explanation: "Added to balance Supply and Demand (satisfy rim conditions)."
    },
    {
        question: "What is linear programming?",
        options: [
            "(A) Constrained optimization technique",
            "(B) Technique for economic allocation of limited resources",
            "(C) Mathematical technique",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "LP fits all these descriptions."
    },
    {
        question: "Constraint in a linear programming model restricts:",
        options: [
            "(A) value of objective functior",
            "(B) value of a decision variable",
            "(C) use of the available resources",
            "(D) All of the above"
        ],
        answer: "(C)",
        explanation: "Constraints represent limits on resources. (They consequently restrict variables and objective value)."
    },
    {
        question: "The distinguishing feature of a linear programming model is:",
        options: [
            "(A) relationship among all variables is linear",
            "(B) it has a single objective function & constraints",
            "(C) value of decision variables is non-negative",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "Linearity (A) is the distinguishing feature compared to other programming types. But D covers standard form features."
    },
    {
        question: "While solving a Linear Programming model graphically, the area bounded by the constraints is called:",
        options: [
            "(A) Feasible region",
            "(B) Infeasible region",
            "(C) Unbounded solution",
            "(D) Non-bounded solution"
        ],
        answer: "(A)",
        explanation: "Feasible Region."
    },
    {
        question: "Each optimization problem must have certain parameters called :",
        options: [
            "(A) Linear variables",
            "(B) Non-linear variables",
            "(C) Design variables",
            "(D) Dummy variables"
        ],
        answer: "(C)",
        explanation: "The variables to be determined are Design Variables (or Decision Variables)."
    },
    {
        question: "When the optimization problem cost functions are differentiable, the problem is referred to as:",
        options: [
            "(A) rough",
            "(B) non-smooth",
            "(C) smooth",
            "(D) non-rough"
        ],
        answer: "(C)",
        explanation: "Differentiable functions are mathematically \"Smooth\"."
    },
    {
        question: "The feasible region for the inequality constraints with respect to equality constraints:",
        options: [
            "(A) increases",
            "(B) decreases",
            "(C) does not change",
            "(D) None of these"
        ],
        answer: "(B)",
        explanation: "Equality constraints are more restrictive than inequalities, reducing the feasible region (from an area to a line segment)."
    },
    {
        question: "If two constraints do not intersect in the positive quadrant of the graph then:",
        options: [
            "(A) the solution is unbounded",
            "(B) the problem is infeasible",
            "(C) one of the constraints is redundant",
            "(D) None of these"
        ],
        answer: "(B)",
        explanation: "If constraints define non-overlapping regions in the positive quadrant, there is No Feasible Solution."
    },
    {
        question: "Given arrival rate = 15, service rate = 20, the value of traffic intensity is:",
        options: [
            "(A) 0.75",
            "(B) 1.33",
            "(C) 0.5",
            "(D) 35"
        ],
        answer: "(A)",
        explanation: "15/20 = 0.75."
    },
    {
        question: "Hungarian Method is used to solve:",
        options: [
            "(A) A transportation problem",
            "(B) A travelling salesman problem",
            "(C) A LP problem",
            "(D) Both (A) and (B)"
        ],
        answer: "(D)",
        explanation: "Hungarian method solves Assignments. TSP is a restricted Assignment problem. Assignment is a restricted Transportation problem. It is used for both."
    },
    {
        question: "The time required by each job on each machine is called-time.",
        options: [
            "(A) elapsed",
            "(B) idle",
            "(C) processing",
            "(D) average"
        ],
        answer: "(C)",
        explanation: "Processing time."
    },
    {
        question: "The time between the starting of the first job and completion of the last job in sequencing problems is called:",
        options: [
            "(A) Total time",
            "(B) Assignment time",
            "(C) Elapsed time",
            "(D) Idle time"
        ],
        answer: "(C)",
        explanation: "Total Elapsed Time."
    },
    {
        question: "At EOQ:",
        options: [
            "(A) Annual purchase cost = Annual ordering cost",
            "(B) Annual ordering cost = Annual carrying cost",
            "(C) Annual carrying cost = Annual shortage cost",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "The optimal point is where Ordering Cost = Carrying Cost."
    },
    {
        question: "Which of the following increases with the quantity ordered per order?",
        options: [
            "(A) Carrying cost",
            "(B) Ordering cost",
            "(C) Purchase cost",
            "(D) Demand"
        ],
        answer: "(A)",
        explanation: "More quantity per order = higher average inventory = higher Carrying cost."
    },
    {
        question: "Operations Research (OR), which is a very powerful tool for:",
        options: [
            "(A) Research",
            "(B) Decision - Making",
            "(C) Operations",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "OR aids Decision-Making."
    },
    {
        question: "Which of the following formula cannot be used to calculate re-order level:",
        options: [
            "(A) Minimum level + consumption during lead time",
            "(B) Maximum consumption * maximum re-order period",
            "(C) Maximum consumption * lead time + safety stock",
            "(D) Minimum consumption * minimum re-order period"
        ],
        answer: "(D)",
        explanation: "ROL must cover maximum expected demand. Minimum consumption formulas would lead to stockouts. Option B is a standard formula (Max usage * Max lead time)."
    },
    {
        question: "Operations Research attempts to find the best and ______ solution to a problem.",
        options: [
            "(A) Perfect",
            "(B) Degenerate",
            "(C) Optimum",
            "(D) None of the above"
        ],
        answer: "(C)",
        explanation: "OR seeks the Optimum (Optimal) solution."
    },
    {
        question: "Group replacement policy is most suitable for:",
        options: [
            "(A) Trucks",
            "(B) Infant machines",
            "(C) Street light bulbs",
            "(D) New cars"
        ],
        answer: "(C)",
        explanation: "Items that fail suddenly and are cheap/numerous (Light bulbs)."
    },
    {
        question: "The following is not discussed in group replacement policy:",
        options: [
            "(A) Failure probability",
            "(B) Cost of individual replacement",
            "(C) Loss due to failure",
            "(D) Present worth factor series"
        ],
        answer: "(D)",
        explanation: "Basic group replacement models usually ignore discounting (Present worth factor)."
    },
    {
        question: "Decreasing failure rate is usually observed in ______ stage of the machine.",
        options: [
            "(A) infant",
            "(B) youth",
            "(C) old age",
            "(D) any time in its life"
        ],
        answer: "(A)",
        explanation: "\"Infant mortality\" period is characterized by decreasing failure rates as defective parts are weeded out."
    },
    {
        question: "The production manager will not recommend group replacement policy in case of:",
        options: [
            "(A) When large number of identical items is to be replaced",
            "(B) Low cost items are to be replaced, where record keeping is a problem",
            "(C) For items that fail completely",
            "(D) Repairable items"
        ],
        answer: "(D)",
        explanation: "Repairable items are usually maintained/repaired individually, not replaced in groups like disposable bulbs."
    },
    {
        question: "The degeneracy in the transportation problem indicates that :",
        options: [
            "(A) dummy allocation(s) needs to be added",
            "(B) the problem has no feasible solution",
            "(C) the multiple optimal solutions exist",
            "(D) (A) and (B) but not (C)"
        ],
        answer: "(A)",
        explanation: "Degeneracy (allocations < m+n-1) prevents the stepping stone method from working. We fix it by adding a dummy allocation (epsilon)."
    },
    {
        question: "In a transportation problem, we must make the number of ______ and ______ equal.",
        options: [
            "(A) destinations; sources",
            "(B) units supplied; units demanded",
            "(C) columns; rows",
            "(D) positive cost coefficients; negative cost coefficients"
        ],
        answer: "(B)",
        explanation: "Total Supply must equal Total Demand (Balanced problem)."
    },
    {
        question: "One disadvantage of using North-West Corner Rule to find initial the solution to the transportation problem is that:",
        options: [
            "(A) it is complicated to use",
            "(B) it does not take into account the cost of transportation",
            "(C) it leads to a degenerate initial solution",
            "(D) All of the above"
        ],
        answer: "(B)",
        explanation: "NWCM allocates based on position (top-left) regardless of costs, often leading to a poor (high cost) initial solution."
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