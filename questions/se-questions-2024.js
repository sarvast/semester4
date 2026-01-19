const seQuestions2024 = [
  {
    question: "Software engineering is a discipline that integrates:",
    options: [
      "Process",
      "Methods",
      "Tools",
      "All of the above"
    ],
    answer: 3,
    explanation: "Software Engineering is a layered technology that combines Process, Methods, and Tools."
  },
  {
    question: "Which is not a phase of SDLC?",
    options: [
      "Requirement Gathering",
      "Analysis",
      "Testing",
      "Marketing"
    ],
    answer: 3,
    explanation: "Marketing is a business activity, not a technical phase of the Software Development Life Cycle (SDLC)."
  },
  {
    question: "In the waterfall model, the output of one phase acts as the input for:",
    options: [
      "The previous phase",
      "The next phase",
      "Any phase",
      "None of the above"
    ],
    answer: 1,
    explanation: "The Waterfall model is sequential; the output of one phase (e.g., design) becomes the input for the next (e.g., coding)."
  },
  {
    question: "The spiral model is a combination of:",
    options: [
      "Waterfall and Prototype models",
      "Waterfall and RAD models",
      "Incremental and Prototype models",
      "None of the above"
    ],
    answer: 0,
    explanation: "The Spiral Model combines the systematic nature of the Waterfall model with the iterative nature of Prototyping."
  },
  {
    question: "Which model is suitable for large and complex projects?",
    options: [
      "Waterfall Model",
      "Prototype Model",
      "Spiral Model",
      "RAD Model"
    ],
    answer: 2,
    explanation: "The Spiral model is best for large, complex, and high-risk projects due to its risk analysis features."
  },
  {
    question: "Which model is also known as the verification and validation model?",
    options: [
      "Waterfall Model",
      "V-Model",
      "Spiral Model",
      "Prototype Model"
    ],
    answer: 1,
    explanation: "The V-Model emphasizes Verification and Validation phases running in parallel."
  },
  {
    question: "SRS stands for:",
    options: [
      "Software Requirement Specification",
      "System Requirement Specification",
      "Software Resource Specification",
      "System Resource Specification"
    ],
    answer: 0,
    explanation: "Standard acronym: Software Requirement Specification."
  },
  {
    question: "Functional requirements describe:",
    options: [
      "What the system should do",
      "How the system should do it",
      "The constraints on the system",
      "None of the above"
    ],
    answer: 0,
    explanation: "Functional requirements define the system's behavior and functions (\"What it does\")."
  },
  {
    question: "Which of the following is a non-functional requirement?",
    options: [
      "Login",
      "Performance",
      "Search",
      "Calculation"
    ],
    answer: 1,
    explanation: "Performance is a quality attribute (non-functional), while Login and Search are functional features."
  },
  {
    question: "Feasibility study includes:",
    options: [
      "Technical feasibility",
      "Operational feasibility",
      "Economic feasibility",
      "All of the above"
    ],
    answer: 3,
    explanation: "Feasibility studies assess technical, operational, and economic viability."
  },
  {
    question: "DFD stands for:",
    options: [
      "Data Flow Diagram",
      "Data Flow Design",
      "Data Function Diagram",
      "Data Function Design"
    ],
    answer: 0,
    explanation: "Data Flow Diagram."
  },
  {
    question: "In DFD, a rectangle represents:",
    options: [
      "Process",
      "Data Store",
      "External Entity",
      "Data Flow"
    ],
    answer: 2,
    explanation: "Rectangles (or squares) represent External Entities (sources/sinks) in standard DFD notation."
  },
  {
    question: "Which level of DFD is also known as the Context Diagram?",
    options: [
      "Level 0",
      "Level 1",
      "Level 2",
      "Level 3"
    ],
    answer: 0,
    explanation: "Level 0 DFD is called the Context Diagram."
  },
  {
    question: "A data dictionary contains:",
    options: [
      "Definitions of all data items",
      "Process logic",
      "Diagrams",
      "Code"
    ],
    answer: 0,
    explanation: "A Data Dictionary stores definitions and metadata about data items."
  },
  {
    question: "ER diagram is used for:",
    options: [
      "Process modeling",
      "Data modeling",
      "Functional modeling",
      "Behavioral modeling"
    ],
    answer: 1,
    explanation: "Entity-Relationship (ER) diagrams are used for Data Modeling."
  },
  {
    question: "In an ER diagram, an ellipse represents:",
    options: [
      "Entity",
      "Attribute",
      "Relationship",
      "Link"
    ],
    answer: 1,
    explanation: "Ellipses represent Attributes in ER diagrams."
  },
  {
    question: "Coupling refers to:",
    options: [
      "The interdependence between modules",
      "The strength of a module",
      "The size of a module",
      "The complexity of a module"
    ],
    answer: 0,
    explanation: "Coupling measures the degree of interdependence between software modules."
  },
  {
    question: "Cohesion refers to:",
    options: [
      "The interdependence between modules",
      "The internal strength of a module",
      "The size of a module",
      "The complexity of a module"
    ],
    answer: 1,
    explanation: "Cohesion measures how closely related the internal elements of a module are."
  },
  {
    question: "Which is the best type of cohesion?",
    options: [
      "Logical cohesion",
      "Temporal cohesion",
      "Functional cohesion",
      "Coincidental cohesion"
    ],
    answer: 2,
    explanation: "Functional cohesion (module performs exactly one task) is the highest/best form."
  },
  {
    question: "Which is the worst type of coupling?",
    options: [
      "Data coupling",
      "Control coupling",
      "Common coupling",
      "Content coupling"
    ],
    answer: 3,
    explanation: "Content coupling (one module modifying another's internals) is the strongest/worst form."
  },
  {
    question: "Modularity helps in:",
    options: [
      "Reducing complexity",
      "Reusability",
      "Maintainability",
      "All of the above"
    ],
    answer: 3,
    explanation: "Modularity improves maintainability, reusability, and reduces complexity."
  },
  {
    question: "Top-down design approach starts from:",
    options: [
      "The main component",
      "The lowest level component",
      "Any component",
      "None of the above"
    ],
    answer: 0,
    explanation: "Top-down design starts with the main system and decomposes it into sub-components."
  },
  {
    question: "Bottom-up design approach starts from:",
    options: [
      "The main component",
      "The lowest level component",
      "Any component",
      "None of the above"
    ],
    answer: 1,
    explanation: "Bottom-up starts with base components and builds up to the main system."
  },
  {
    question: "Structured programming uses:",
    options: [
      "Sequence, Selection, Iteration",
      "Only Sequence",
      "Only Selection",
      "Only Iteration"
    ],
    answer: 0,
    explanation: "Structured programming relies on three control structures: Sequence, Selection, and Iteration."
  },
  {
    question: "UML stands for:",
    options: [
      "Unified Modeling Language",
      "Uniform Modeling Language",
      "Unified Method Language",
      "Uniform Method Language"
    ],
    answer: 0,
    explanation: "Standard acronym: Unified Modeling Language."
  },
  {
    question: "Use case diagrams are used to model:",
    options: [
      "Static view of the system",
      "Dynamic view of the system",
      "Functional requirements of the system",
      "Deployment view of the system"
    ],
    answer: 2,
    explanation: "Use Case diagrams primarily capture the Functional requirements (interactions). While they show behavior (dynamic), 'Functional requirements' is the most specific purpose in requirements analysis."
  },
  {
    question: "Class diagrams are used to model:",
    options: [
      "Static view of the system",
      "Dynamic view of the system",
      "Interaction view of the system",
      "State view of the system"
    ],
    answer: 0,
    explanation: "Class diagrams represent the static structure (classes, attributes, relationships)."
  },
  {
    question: "Sequence diagrams are used to model:",
    options: [
      "Static view of the system",
      "Interaction between objects over time",
      "State changes",
      "Deployment"
    ],
    answer: 1,
    explanation: "Sequence diagrams show object interactions arranged in time sequence."
  },
  {
    question: "Activity diagrams are similar to:",
    options: [
      "Flowcharts",
      "Data Flow Diagrams",
      "ER Diagrams",
      "Use Case Diagrams"
    ],
    answer: 0,
    explanation: "Activity diagrams model the flow of control, very similar to Flowcharts."
  },
  {
    question: "Testing is performed to:",
    options: [
      "Find errors",
      "Show correctness",
      "Improve quality",
      "All of the above"
    ],
    answer: 3,
    explanation: "Testing aims to find errors, demonstrate requirements are met (correctness), and improve quality."
  },
  {
    question: "Black box testing focuses on:",
    options: [
      "Internal logic",
      "Functional requirements",
      "Code structure",
      "Design details"
    ],
    answer: 1,
    explanation: "Black box testing checks functionality (IO) without knowing internal logic."
  },
  {
    question: "White box testing focuses on:",
    options: [
      "Internal logic and code structure",
      "Functional requirements",
      "User interface",
      "None of the above"
    ],
    answer: 0,
    explanation: "White box testing inspects internal paths and logic."
  },
  {
    question: "Unit testing is done by:",
    options: [
      "Developers",
      "Testers",
      "Users",
      "Managers"
    ],
    answer: 0,
    explanation: "Developers typically perform unit testing on their own code."
  },
  {
    question: "Integration testing is done to test:",
    options: [
      "Individual modules",
      "Integrated modules",
      "The whole system",
      "Acceptance"
    ],
    answer: 1,
    explanation: "Integration testing verifies the interfaces between integrated components/modules."
  },
  {
    question: "System testing is done to test:",
    options: [
      "Individual modules",
      "Integrated modules",
      "The complete system",
      "Acceptance"
    ],
    answer: 2,
    explanation: "System testing validates the complete, integrated system against requirements."
  },
  {
    question: "Alpha testing is done by:",
    options: [
      "Developers",
      "Users at developer's site",
      "Users at their own site",
      "None of the above"
    ],
    answer: 1,
    explanation: "Alpha testing is done at the developer's site, often by internal users or a select group."
  },
  {
    question: "Beta testing is done by:",
    options: [
      "Developers",
      "Users at developer's site",
      "Users at their own site",
      "None of the above"
    ],
    answer: 2,
    explanation: "Beta testing is performed by end-users in their own real-world environment."
  },
  {
    question: "Regression testing is done:",
    options: [
      "After fixing a bug",
      "Before coding",
      "During requirement gathering",
      "None of the above"
    ],
    answer: 0,
    explanation: "Regression testing ensures that new changes (bug fixes) haven't broken existing functionality."
  },
  {
    question: "Cyclomatic complexity is a measure of:",
    options: [
      "Code size",
      "Logical complexity",
      "Data complexity",
      "None of the above"
    ],
    answer: 1,
    explanation: "Cyclomatic complexity measures the number of linearly independent paths (logical complexity) through code."
  },
  {
    question: "COCOMO stands for:",
    options: [
      "Common Cost Model",
      "Constructive Cost Model",
      "Computer Cost Model",
      "None of the above"
    ],
    answer: 1,
    explanation: "Constructive Cost Model."
  },
  {
    question: "COCOMO is used for:",
    options: [
      "Cost estimation",
      "Schedule estimation",
      "Effort estimation",
      "All of the above"
    ],
    answer: 3,
    explanation: "COCOMO estimates effort, cost, and schedule."
  },
  {
    question: "Function point analysis is used for:",
    options: [
      "Size estimation",
      "Cost estimation",
      "Effort estimation",
      "All of the above"
    ],
    answer: 0,
    explanation: "Function Points measure software size based on functionality. This size is then used for effort/cost estimation. \"Size estimation\" is the direct measurement."
  },
  {
    question: "Software reliability is defined as:",
    options: [
      "Probability of failure-free operation",
      "Ability to recover from failure",
      "Ability to prevent failure",
      "None of the above"
    ],
    answer: 0,
    explanation: "Reliability is the probability of failure-free operation for a specified time in a specified environment."
  },
  {
    question: "MTBF stands for:",
    options: [
      "Mean Time Between Failures",
      "Mean Time Before Failure",
      "Maximum Time Between Failures",
      "Minimum Time Between Failures"
    ],
    answer: 0,
    explanation: "Mean Time Between Failures."
  },
  {
    question: "CMM stands for:",
    options: [
      "Capability Maturity Model",
      "Computer Maturity Model",
      "Capability Management Model",
      "Computer Management Model"
    ],
    answer: 0,
    explanation: "Capability Maturity Model."
  },
  {
    question: "CMM has ______ levels.",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 2,
    explanation: "The 5 levels are Initial, Repeatable, Defined, Managed, Optimizing."
  },
  {
    question: "ISO 9000 is a standard for:",
    options: [
      "Quality management",
      "Project management",
      "Risk management",
      "Configuration management"
    ],
    answer: 0,
    explanation: "ISO 9000 is a family of quality management standards."
  },
  {
    question: "Software maintenance includes:",
    options: [
      "Corrective maintenance",
      "Adaptive maintenance",
      "Perfective maintenance",
      "All of the above"
    ],
    answer: 3,
    explanation: "Maintenance types include Corrective, Adaptive, Perfective, and Preventive."
  },
  {
    question: "Corrective maintenance is performed to:",
    options: [
      "Correct errors",
      "Adapt to changes",
      "Improve performance",
      "Prevent future errors"
    ],
    answer: 0,
    explanation: "Corrective maintenance fixes bugs/errors."
  },
  {
    question: "Adaptive maintenance is performed to:",
    options: [
      "Correct errors",
      "Adapt to changes in the environment",
      "Improve performance",
      "Prevent future errors"
    ],
    answer: 1,
    explanation: "Adaptive maintenance handles changes in the OS, hardware, or external environment."
  },
  {
    question: "Perfective maintenance is performed to:",
    options: [
      "Correct errors",
      "Adapt to changes",
      "Improve performance or add new features",
      "Prevent future errors"
    ],
    answer: 2,
    explanation: "Perfective maintenance enhances functionality or performance based on user requests."
  },
  {
    question: "Preventive maintenance is performed to:",
    options: [
      "Correct errors",
      "Adapt to changes",
      "Improve performance",
      "Prevent future errors"
    ],
    answer: 3,
    explanation: "Preventive maintenance (Software Re-engineering) updates software to avoid future problems."
  },
  {
    question: "Configuration management involves:",
    options: [
      "Version control",
      "Change control",
      "Build management",
      "All of the above"
    ],
    answer: 3,
    explanation: "SCM covers versioning, change control, and building."
  },
  {
    question: "CASE tools stand for:",
    options: [
      "Computer Aided Software Engineering",
      "Computer Aided System Engineering",
      "Computer Aided Software Environment",
      "Computer Aided System Environment"
    ],
    answer: 0,
    explanation: "Standard definition."
  },
  {
    question: "Upper CASE tools are used for:",
    options: [
      "Requirement analysis and design",
      "Coding and testing",
      "Maintenance",
      "All of the above"
    ],
    answer: 0,
    explanation: "Upper CASE tools support the early phases (Planning, Analysis, Design)."
  },
  {
    question: "Lower CASE tools are used for:",
    options: [
      "Requirement analysis and design",
      "Coding and testing",
      "Maintenance",
      "All of the above"
    ],
    answer: 1,
    explanation: "Lower CASE tools support later phases like Coding and Testing."
  },
  {
    question: "Integrated CASE tools support:",
    options: [
      "Requirement analysis and design",
      "Coding and testing",
      "Entire SDLC",
      "None of the above"
    ],
    answer: 2,
    explanation: "Integrated CASE (I-CASE) covers the full life cycle."
  },
  {
    question: "Reverse engineering is the process of:",
    options: [
      "Creating code from design",
      "Creating design from code",
      "Creating requirements from design",
      "None of the above"
    ],
    answer: 1,
    explanation: "Reverse Engineering analyzes a system (code) to identify components and create higher-level abstractions (design)."
  },
  {
    question: "Re-engineering includes:",
    options: [
      "Reverse engineering",
      "Forward engineering",
      "Restructuring",
      "All of the above"
    ],
    answer: 3,
    explanation: "Software Re-engineering involves examining, restructuring, and rebuilding (forward engineering) existing systems."
  },
  {
    question: "Software reuse helps in:",
    options: [
      "Reducing development time",
      "Reducing cost",
      "Improving quality",
      "All of the above"
    ],
    answer: 3,
    explanation: "Reusing proven code saves time/money and ensures higher reliability."
  },
  {
    question: "Component-based software engineering focuses on:",
    options: [
      "Building software from existing components",
      "Writing code from scratch",
      "Using only open source software",
      "None of the above"
    ],
    answer: 0,
    explanation: "CBSE emphasizes assembling systems from pre-built software components."
  },
  {
    question: "Agile methodology values:",
    options: [
      "Processes and tools",
      "Comprehensive documentation",
      "Contract negotiation",
      "Individuals and interactions"
    ],
    answer: 3,
    explanation: "Agile Manifesto: \"Individuals and interactions over processes and tools\"."
  },
  {
    question: "Scrum is an:",
    options: [
      "Agile framework",
      "Waterfall framework",
      "Spiral framework",
      "None of the above"
    ],
    answer: 0,
    explanation: "Scrum is a popular framework for implementing Agile."
  },
  {
    question: "In Scrum, a sprint is a:",
    options: [
      "Fixed time period for development",
      "Meeting",
      "Role",
      "Document"
    ],
    answer: 0,
    explanation: "A Sprint is a time-boxed iteration (usually 2-4 weeks)."
  },
  {
    question: "Product backlog in Scrum is:",
    options: [
      "List of requirements",
      "List of bugs",
      "List of tasks",
      "None of the above"
    ],
    answer: 0,
    explanation: "The Product Backlog is an ordered list of everything that is known to be needed in the product (requirements)."
  },
  {
    question: "Which is not a role in Scrum?",
    options: [
      "Product Owner",
      "Scrum Master",
      "Development Team",
      "Project Manager"
    ],
    answer: 3,
    explanation: "Scrum defines three roles: Product Owner, Scrum Master, and Team. \"Project Manager\" is not a Scrum role."
  },
  {
    question: "Extreme Programming (XP) emphasizes:",
    options: [
      "Code review",
      "Pair programming",
      "Testing",
      "All of the above"
    ],
    answer: 3,
    explanation: "XP practices include Pair Programming, Test-Driven Development, and Continuous Integration (reviews)."
  },
  {
    question: "Software prototype is a:",
    options: [
      "Working model",
      "Final product",
      "Document",
      "None of the above"
    ],
    answer: 0,
    explanation: "A prototype is a preliminary working model of the software."
  },
  {
    question: "Rapid Application Development (RAD) is based on:",
    options: [
      "Prototyping and iterative development",
      "Waterfall model",
      "Spiral model",
      "None of the above"
    ],
    answer: 0,
    explanation: "RAD uses prototyping and iterative cycles to speed up development."
  },
  {
    question: "Verification ensures:",
    options: [
      "The product is built correctly",
      "The right product is built",
      "Both (A) and (B)",
      "None of the above"
    ],
    answer: 0,
    explanation: "Verification: \"Are we building the product right?\" (Compliance). Validation: \"Are we building the right product?\" (Utility)."
  },
  {
    question: "Validation ensures:",
    options: [
      "The product is built correctly",
      "The right product is built",
      "Both (A) and (B)",
      "None of the above"
    ],
    answer: 1,
    explanation: "Validation confirms the software meets the user's needs (\"The right product\")."
  },
  {
    question: "Static testing involves:",
    options: [
      "Executing the code",
      "Reviewing the code and documentation",
      "Both (A) and (B)",
      "None of the above"
    ],
    answer: 1,
    explanation: "Static testing checks artifacts without execution."
  },
  {
    question: "Dynamic testing involves:",
    options: [
      "Executing the code",
      "Reviewing the code and documentation",
      "Both (A) and (B)",
      "None of the above"
    ],
    answer: 0,
    explanation: "Dynamic testing requires code execution."
  },
  {
    question: "Cause-effect graphing is a technique for:",
    options: [
      "White box testing",
      "Black box testing",
      "Static testing",
      "None of the above"
    ],
    answer: 1,
    explanation: "Cause-effect graphing is a black-box test design technique."
  },
  {
    question: "Boundary value analysis is a technique for:",
    options: [
      "White box testing",
      "Black box testing",
      "Static testing",
      "None of the above"
    ],
    answer: 1,
    explanation: "Boundary Value Analysis (BVA) is a black-box technique."
  },
  {
    question: "Path testing is a technique for:",
    options: [
      "White box testing",
      "Black box testing",
      "Static testing",
      "None of the above"
    ],
    answer: 0,
    explanation: "Path testing (basis path testing) analyzes code paths, a white-box method."
  },
  {
    question: "Loop testing is a technique for:",
    options: [
      "White box testing",
      "Black box testing",
      "Static testing",
      "None of the above"
    ],
    answer: 0,
    explanation: "Loop testing checks the validity of loop constructs (white-box)."
  },
  {
    question: "Mutation testing is a type of:",
    options: [
      "White box testing",
      "Black box testing",
      "Static testing",
      "None of the above"
    ],
    answer: 0,
    explanation: "Mutation testing modifies code to ensure test cases can detect changes (white-box)."
  },
  {
    question: "Software quality is defined as:",
    options: [
      "Conformance to requirements",
      "Fitness for use",
      "Both (A) and (B)",
      "None of the above"
    ],
    answer: 2,
    explanation: "Quality is defined by both meeting specs (conformance) and satisfying user needs (fitness for use)."
  },
  {
    question: "McCall's quality model classifies quality factors into:",
    options: [
      "Product operation, revision, and transition",
      "Functional and non-functional",
      "Internal and external",
      "None of the above"
    ],
    answer: 0,
    explanation: "McCall's model uses three categories: Operation, Revision, and Transition."
  },
  {
    question: "ISO 9126 is a standard for:",
    options: [
      "Software quality",
      "Software testing",
      "Software maintenance",
      "Software configuration management"
    ],
    answer: 0,
    explanation: "ISO 9126 defines a software quality model."
  },
  {
    question: "Six Sigma is a methodology for:",
    options: [
      "Process improvement",
      "Testing",
      "Coding",
      "None of the above"
    ],
    answer: 0,
    explanation: "Six Sigma is a data-driven approach to process improvement and defect reduction."
  },
  {
    question: "TQM stands for:",
    options: [
      "Total Quality Management",
      "Total Quantity Management",
      "Total Quality Maintenance",
      "Total Quantity Maintenance"
    ],
    answer: 0,
    explanation: "Total Quality Management."
  },
  {
    question: "Quality circle is a group of:",
    options: [
      "Employees who meet regularly to discuss quality problems",
      "Managers",
      "Customers",
      "None of the above"
    ],
    answer: 0,
    explanation: "Quality circles are groups of workers who meet to solve work-related problems."
  },
  {
    question: "Cleanroom software engineering emphasizes:",
    options: [
      "Defect prevention",
      "Defect removal",
      "Testing",
      "None of the above"
    ],
    answer: 0,
    explanation: "Cleanroom engineering focuses on avoiding defects via formal methods and verification, rather than removing them later."
  },
  {
    question: "Software safety is concerned with:",
    options: [
      "Preventing accidents",
      "Preventing errors",
      "Improving performance",
      "None of the above"
    ],
    answer: 0,
    explanation: "Safety ensures software does not cause hazardous conditions/accidents."
  },
  {
    question: "Risk management involves:",
    options: [
      "Risk identification",
      "Risk analysis",
      "Risk mitigation",
      "All of the above"
    ],
    answer: 3,
    explanation: "Risk management includes identifying, analyzing, and mitigating risks."
  },
  {
    question: "Which is not a risk management activity?",
    options: [
      "Risk identification",
      "Risk analysis",
      "Risk mitigation",
      "Risk creation"
    ],
    answer: 3,
    explanation: "You manage risks, you don't intentionally create them as a management activity."
  },
  {
    question: "A milestone is a:",
    options: [
      "Recognizable end point of a software process activity",
      "Document",
      "Meeting",
      "None of the above"
    ],
    answer: 0,
    explanation: "Milestones mark significant points/completions in the project timeline."
  },
  {
    question: "A deliverable is a:",
    options: [
      "Work product that is delivered to the customer",
      "Document",
      "Meeting",
      "None of the above"
    ],
    answer: 0,
    explanation: "Deliverables are tangible outputs provided to the client."
  },
  {
    question: "WBS stands for:",
    options: [
      "Work Breakdown Structure",
      "Work Break Structure",
      "Work Breakdown System",
      "Work Break System"
    ],
    answer: 0,
    explanation: "Work Breakdown Structure."
  },
  {
    question: "CPM stands for:",
    options: [
      "Critical Path Method",
      "Critical Plan Method",
      "Computer Path Method",
      "Computer Plan Method"
    ],
    answer: 0,
    explanation: "Critical Path Method."
  },
  {
    question: "PERT stands for:",
    options: [
      "Program Evaluation and Review Technique",
      "Project Evaluation and Review Technique",
      "Program Estimation and Review Technique",
      "Project Estimation and Review Technique"
    ],
    answer: 0,
    explanation: "Program Evaluation and Review Technique."
  },
  {
    question: "Gantt chart is used for:",
    options: [
      "Scheduling",
      "Costing",
      "Designing",
      "Coding"
    ],
    answer: 0,
    explanation: "Gantt charts are scheduling tools."
  },
  {
    question: "Baseline is a:",
    options: [
      "Software configuration item that has been formally reviewed and agreed upon",
      "Document",
      "Code",
      "None of the above"
    ],
    answer: 0,
    explanation: "A baseline is an approved version of a configuration item used as a basis for further work."
  },
  {
    question: "Version control is used to:",
    options: [
      "Manage changes to software",
      "Write code",
      "Design software",
      "Test software"
    ],
    answer: 0,
    explanation: "Version control tracks and manages changes."
  },
  {
    question: "Change control is used to:",
    options: [
      "Control changes to software",
      "Write code",
      "Design software",
      "Test software"
    ],
    answer: 0,
    explanation: "Change control ensures changes are approved and tracked."
  },
  {
    question: "Software re-engineering is concerned with:",
    options: [
      "Re-implementing legacy systems",
      "Writing new software",
      "Maintenance",
      "None of the above"
    ],
    answer: 0,
    explanation: "Re-engineering involves modernizing legacy systems."
  },
  {
    question: "Which is not a software re-engineering activity?",
    options: [
      "Source code translation",
      "Reverse engineering",
      "Program structure improvement",
      "Writing new software from scratch"
    ],
    answer: 3,
    explanation: "Re-engineering modifies existing systems; writing from scratch is new development (Greenfield)."
  },
  {
    question: "Component-based software engineering involves:",
    options: [
      "Building systems from existing components",
      "Writing code from scratch",
      "Using only open source software",
      "None of the above"
    ],
    answer: 0,
    explanation: "CBSE builds systems by integrating pre-existing software components."
  }
];
