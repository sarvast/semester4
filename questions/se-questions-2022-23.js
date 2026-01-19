const seQuestions2022_23 = [
  {
    question: "Which of the following white box testing technique is to set up test cases which covers all statements and branch conditions?",
    options: [
      "Data-flow testing",
      "Boundary testing",
      "Control-flow testing",
      "Pair-wise testing"
    ],
    answer: 2,
    explanation: "Control-flow testing involves designing test cases that cover the control structure (statements, branches, paths) of the program."
  },
  {
    question: "Which of the following is not used in measuring the size of the software?",
    options: [
      "Size of module",
      "Function Points",
      "KLOC",
      "None of the above"
    ],
    answer: 3,
    explanation: "Size of module, Function Points, and KLOC (Thousands of Lines of Code) are all valid metrics for measuring software size. Therefore, \"None of the above\" is the correct answer because all listed options are used."
  },
  {
    question: "______ is the process of evaluating a system or its component(s) with the intent to find whether it satisfies the specified requirements or not.",
    options: [
      "planning",
      "analysis",
      "design",
      "All of the above"
    ],
    answer: 3,
    explanation: "Software Testing is the process of evaluating a system to verify that it satisfies specified requirements and to identify differences between expected and actual results. (Note: The actual question implies Testing. In context of definitions, \"evaluating... to find errors\" or \"satisfy requirements\" is Testing. Given the options layout in source, option D or the missing text refers to Testing)."
  },
  {
    question: "SDLC stands for:",
    options: [
      "Software Deployment Life Cycle",
      "Software Design Life Cycle",
      "Software Developer Life Cycle",
      "Software Development Life Cycle"
    ],
    answer: 3,
    explanation: "Standard acronym for Software Development Life Cycle."
  },
  {
    question: "Verification has:",
    options: [
      "dynamic activities",
      "subjective activities",
      "static activities",
      "objective activities"
    ],
    answer: 2,
    explanation: "Verification (e.g., reviews, inspections) involves static analysis of documents and code without execution. Validation is dynamic (execution)."
  },
  {
    question: "Which of the following term describes testing?",
    options: [
      "Finding broken code",
      "Evaluating deliverable to find errors",
      "A stage of all projects",
      "None of the above"
    ],
    answer: 1,
    explanation: "Testing is formally described as evaluating a deliverable to identify errors or defects."
  },
  {
    question: "Alpha testing is done at:",
    options: [
      "Developer's end",
      "User's end",
      "Developer's and User's end",
      "None of the above"
    ],
    answer: 0,
    explanation: "Alpha testing is performed at the developer's site, usually by an internal team, before the software is released to external users."
  },
  {
    question: "Upper CASE tools are used in ______ stages of SDLC.",
    options: [
      "Software Design",
      "Software Implementation",
      "Software Testing",
      "Software Requirement"
    ],
    answer: 3,
    explanation: "Upper CASE tools support the early stages of the SDLC: Planning, Requirements, and Design. Option (D) Requirements is the earliest phase listed."
  },
  {
    question: "Which of the following is not a type of CASE tool?",
    options: [
      "Diagram tools",
      "Process modeling tools",
      "Documentation tools",
      "Testing tool"
    ],
    answer: 3,
    explanation: "While testing tools are part of the broader CASE family (Lower CASE), in older classifications, \"CASE tools\" often referred specifically to analysis/design modeling (Upper CASE). Documentation, Process Modeling, and Diagram tools are core Upper CASE types. Testing tools are distinct (Lower CASE). Without a distractor like \"Compiler\", (D) is the most likely intended answer in this specific curriculum context."
  },
  {
    question: "Which tool is used to assist in designing web pages?",
    options: [
      "Web Development Tools",
      "Prototyping Tools",
      "Programming Tools",
      "All of the above"
    ],
    answer: 0,
    explanation: "Web Development Tools are specifically tailored for designing and building web pages."
  },
  {
    question: "Where is CASE tool used?",
    options: [
      "Project management",
      "Schema generation",
      "Data modeling",
      "All of the above"
    ],
    answer: 3,
    explanation: "CASE tools cover the entire lifecycle, including management, modeling, and code/schema generation."
  },
  {
    question: "What stores all changes and info related to the project from development through maintenance in CASE tools?",
    options: [
      "Database",
      "Repository",
      "Register",
      "Files"
    ],
    answer: 1,
    explanation: "The Repository (or Central Repository) is the database that stores all project information in a CASE environment."
  },
  {
    question: "Which testing includes testing a software manually, i.e. without using any automated tool or any script?",
    options: [
      "Automation Testing",
      "Client Testing",
      "Manual Testing",
      "All of the above"
    ],
    answer: 2,
    explanation: "Definition of Manual Testing."
  },
  {
    question: "Automation testing, which is also known as:",
    options: [
      "Test Design",
      "Test Automation",
      "Test Process",
      "Automation Testing"
    ],
    answer: 1,
    explanation: "Automation testing is synonymous with Test Automation."
  },
  {
    question: "In which of the following type of testing, testing is done without planning and documentation?",
    options: [
      "Unit testing",
      "Retesting",
      "Ad hoc testing",
      "Regression testing"
    ],
    answer: 2,
    explanation: "Ad hoc testing is informal testing performed without formal test plans or documentation."
  },
  {
    question: "______ model also called phased development models that share the common objective of reducing the cycle time for development.",
    options: [
      "Evolutionary Development Model",
      "Incremental and Iterative Model",
      "Prototyping Model",
      "Spiral Model"
    ],
    answer: 1,
    explanation: "Incremental and Iterative models release software in phases (increments) to deliver value faster and reduce cycle time."
  },
  {
    question: "Automation testing is also used to test the application from load, performance, and stress point of view:",
    options: [
      "True",
      "False",
      "Can be true or false",
      "Cannot say"
    ],
    answer: 0,
    explanation: "Automation tools are essential for Load, Performance, and Stress testing which are difficult or impossible to perform manually."
  },
  {
    question: "How many levels of software testing are there?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 3,
    explanation: "The standard levels are: Unit, Integration, System, and Acceptance Testing (4 levels)."
  },
  {
    question: "Unit Testing cannot catch each and every bug in an application.",
    options: [
      "Yes",
      "No",
      "Can be yes or no",
      "Cannot say"
    ],
    answer: 0,
    explanation: "Unit testing only checks individual components in isolation. It cannot catch integration errors or system-level issues."
  },
  {
    question: "Which testing has the highest-level modules tested first and progressively, lower-level modules are tested thereafter?",
    options: [
      "Bottom-up integration",
      "Top-down integration",
      "Both (A) and (B)",
      "Up-down integration"
    ],
    answer: 1,
    explanation: "Top-down integration starts with the main control module and uses stubs for lower-level modules."
  },
  {
    question: "Which of the following is type of Non-Functional Testing:",
    options: [
      "Performance Testing",
      "Load Testing",
      "Stress Testing",
      "All of the above"
    ],
    answer: 3,
    explanation: "Performance, Load, and Stress testing evaluate how the system performs (non-functional), rather than what it does."
  },
  {
    question: "Unit testing, integration testing and system testing when combined together is known as alpha testing:",
    options: [
      "True",
      "False",
      "Can be true or false",
      "Cannot say"
    ],
    answer: 0,
    explanation: "Alpha testing is the final testing phase performed by the developer (or internal team) encompassing unit through system testing before release to external users (Beta)."
  },
  {
    question: "A software bug is an:",
    options: [
      "error",
      "fault",
      "flaw",
      "All of the above"
    ],
    answer: 3,
    explanation: "Error, fault, and flaw are all terms used to describe software bugs or defects."
  },
  {
    question: "Issue in software is raised by:",
    options: [
      "Developer",
      "Test Engineer",
      "Customer",
      "User"
    ],
    answer: 1,
    explanation: "In a formal testing process, the Test Engineer is responsible for raising (logging) issues/bugs found during testing."
  },
  {
    question: "Software testers are people whose primary task is to find bugs, or write code to support testing:",
    options: [
      "True",
      "False",
      "Can be true or false",
      "Cannot say"
    ],
    answer: 0,
    explanation: "This accurately describes the role of a Software Tester."
  },
  {
    question: "The spiral model was originally proposed by:",
    options: [
      "IBM",
      "Barry Boehm",
      "Royce",
      "Pressman"
    ],
    answer: 1,
    explanation: "Barry Boehm proposed the Spiral Model in his 1986 paper."
  },
  {
    question: "Selection of a model is based on:",
    options: [
      "Requirements",
      "Development team",
      "Users",
      "All of the above"
    ],
    answer: 3,
    explanation: "The choice of SDLC model depends on project requirements, team expertise, and user involvement."
  },
  {
    question: "Which one of the following is not a software process quality?",
    options: [
      "Portability",
      "Productivity",
      "Timeliness",
      "Visibility"
    ],
    answer: 0,
    explanation: "Portability is a product quality attribute. Productivity, Timeliness, and Visibility are attributes of the development process."
  },
  {
    question: "Efficiency in a software product does not include",
    options: [
      "Processing time",
      "Responsiveness",
      "Licensing",
      "Memory utilization"
    ],
    answer: 2,
    explanation: "Efficiency relates to resource usage (time, memory). Licensing is a legal/business aspect."
  },
  {
    question: "What is the first step in the software development lifecycle?",
    options: [
      "Preliminary Investigation and Analysis",
      "System Testing",
      "System Design",
      "Coding"
    ],
    answer: 0,
    explanation: "SDLC begins with investigation/planning/analysis."
  },
  {
    question: "The reason for software bugs and failures is due to",
    options: [
      "Software Developers",
      "Software companies",
      "Both (A) and (B)",
      "None of the above"
    ],
    answer: 2,
    explanation: "Bugs can arise from developer errors or systemic issues within the software company's processes."
  },
  {
    question: "Software Engineering is a :",
    options: [
      "Complicated way to develop software",
      "Systematic way to develop software",
      "Cost-effective way to develop software",
      "Both (B) and (C)"
    ],
    answer: 3,
    explanation: "Software Engineering is defined as a systematic, disciplined, and cost-effective approach to development."
  },
  {
    question: "Which of the items listed below is not one of the software engineering layers?",
    options: [
      "Process",
      "Manufacturing",
      "Methods",
      "Tools"
    ],
    answer: 1,
    explanation: "The layers of Software Engineering are Tools, Methods, Process, and A Quality Focus. Manufacturing is a concept from hardware/traditional engineering, not a software engineering layer."
  },
  {
    question: "Which of the following is involved in the system planning and designing phase of the Software Development Life Cycle (SDLC)?",
    options: [
      "Specification freeze",
      "Sizing",
      "Parallel run",
      "All of the above"
    ],
    answer: 3,
    explanation: "Planning and design involve freezing specifications, estimating size/effort, and planning deployment strategies like parallel runs."
  },
  {
    question: "Which model is also known as Verification and validation model?",
    options: [
      "V-model",
      "Waterfall model",
      "Big Bang model",
      "Spiral model"
    ],
    answer: 0,
    explanation: "The V-Model explicitly links verification phases (requirements, design) with validation phases (testing)."
  },
  {
    question: "The spiral model has two dimensions namely ______ and ______.",
    options: [
      "diagonal, angular",
      "radial, perpendicular",
      "radial, angular",
      "diagonal, perpendicular"
    ],
    answer: 2,
    explanation: "The dimensions are Radial (representing cumulative cost) and Angular (representing progress through the phases)."
  },
  {
    question: "Spiral Model has user involvement in all its phases.",
    options: [
      "True",
      "False",
      "All of the above",
      "None of the above"
    ],
    answer: 1,
    explanation: "While user feedback is critical in the evaluation sector of the spiral, users are not typically involved in the coding or detailed engineering phases in the same way they might be in Agile. (Standard answer is often False for \"all phases\" in traditional models)."
  },
  {
    question: "One can choose Waterfall Model if the project development schedule is tight.",
    options: [
      "True",
      "False",
      "All of the above",
      "None of the above"
    ],
    answer: 1,
    explanation: "The Waterfall model is rigid and sequential, often leading to longer schedules. Iterative or RAD models are better for tight schedules."
  },
  {
    question: "RAD Model has high reliability requirements.",
    options: [
      "True",
      "False",
      "All of the above",
      "None of the above"
    ],
    answer: 1,
    explanation: "RAD prioritizes speed and prototyping over the rigorous quality assurance typically required for high-reliability systems."
  },
  {
    question: "Which of the following life cycle model can be chosen if the development team has less experience on similar projects?",
    options: [
      "Spiral",
      "Waterfall",
      "RAD",
      "Iterative Enhancement Model"
    ],
    answer: 0,
    explanation: "The Spiral Model is risk-driven and allows for iterative risk assessment, making it suitable when the team lacks experience or the project is risky."
  },
  {
    question: "A model that is the demo implementation of the system:",
    options: [
      "waterfall",
      "prototype",
      "incremental",
      "agile"
    ],
    answer: 1,
    explanation: "A Prototype is a preliminary working model or demo of the system."
  },
  {
    question: "A stage in which individual components are integrated and ensured that they are error-free to meet customer requirements.",
    options: [
      "Coding",
      "Testing",
      "Design",
      "Implementation"
    ],
    answer: 1,
    explanation: "The description refers to the Testing phase (specifically Integration and System Testing)."
  },
  {
    question: "ER diagram is a ______.",
    options: [
      "Design",
      "Coding",
      "Testing",
      "None of above"
    ],
    answer: 0,
    explanation: "Entity-Relationship (ER) diagrams are tools used during the Design phase (Data Modeling)."
  },
  {
    question: "______ is an object into real world that is distinguishable from all other objects.",
    options: [
      "Entity",
      "Attribute",
      "Both of the above",
      "None of the above"
    ],
    answer: 0,
    explanation: "Definition of an Entity in ER modeling."
  },
  {
    question: "Each entity has a set of ______.",
    options: [
      "Entity",
      "Attribute",
      "Row",
      "None of the above"
    ],
    answer: 1,
    explanation: "Entities are characterized by their Attributes (properties)."
  },
  {
    question: "______ attributes can be divided into subparts.",
    options: [
      "Simple",
      "Composite",
      "Single valued",
      "Multivalued"
    ],
    answer: 1,
    explanation: "Composite attributes (e.g., Name) can be divided into subparts (First Name, Last Name)."
  },
  {
    question: "______ represent entity set.",
    options: [
      "Ellipses",
      "Rectangles",
      "Diamonds",
      "Lines"
    ],
    answer: 1,
    explanation: "In ER notation, Rectangles represent Entity Sets."
  },
  {
    question: "______ represent relationship set.",
    options: [
      "Ellipses",
      "Rectangles",
      "Diamonds",
      "Lines"
    ],
    answer: 2,
    explanation: "Diamonds represent Relationship Sets."
  },
  {
    question: "______ represent derived attribute.",
    options: [
      "Double ellipse",
      "Dashed ellipse",
      "Diamonds",
      "Lines"
    ],
    answer: 1,
    explanation: "Dashed ellipses represent Derived Attributes."
  },
  {
    question: "______ is a graphic representation of system that shows data flows to from and within system...",
    options: [
      "DFD",
      "ER model",
      "Decision table",
      "Decision tree"
    ],
    answer: 0,
    explanation: "Data Flow Diagram (DFD) models the flow of data through a system."
  },
  {
    question: "______ software resides only in read only memory and is used to control products and systems...",
    options: [
      "Business",
      "Embedded",
      "System",
      "Personal"
    ],
    answer: 1,
    explanation: "Embedded software is built into devices (often in ROM) to control them."
  },
  {
    question: "The cost of software engineering includes approximately ______ of development costs and ______ of testing costs.",
    options: [
      "50%, 50%",
      "40%, 60%",
      "80%, 20%",
      "60%, 40%"
    ],
    answer: 3,
    explanation: "A standard industry approximation is 60% for development (Analysis/Design/Coding) and 40% for Testing."
  },
  {
    question: "The ______ model stipulates that the requirements be completely specified before the rest of the development can processed.",
    options: [
      "Waterfall",
      "Rapid Application Development (RAD)",
      "Iterative Development",
      "Incremental Development"
    ],
    answer: 0,
    explanation: "The Waterfall model relies on freezing requirements at the beginning."
  },
  {
    question: "______ model couples the iterative nature of the prototyping with the controlled and systematic aspects of the linear sequential model.",
    options: [
      "Spiral",
      "Rapid Application Development (RAD)",
      "Iterative Development",
      "Incremental Development"
    ],
    answer: 0,
    explanation: "This is the specific definition of the Spiral Model (combining prototyping iteration with waterfall control)."
  },
  {
    question: "______ results in modification to the software to accommodate changes to its external environment.",
    options: [
      "Adaptive maintenance",
      "Perfective maintenance",
      "Corrective maintenance",
      "Standard maintenance"
    ],
    answer: 0,
    explanation: "Adaptive maintenance adapts software to changes in the environment (OS, hardware, regulations)."
  },
  {
    question: "Which of the following activities includes in linear sequential model...",
    options: [
      "(i), (ii), (iii) and (iv) only",
      "(ii), (iii), (iv) and (v) only",
      "(i), (ii), (iii) and (v) only",
      "(i), (iii), (iv) and (v) only"
    ],
    answer: 2,
    explanation: "The phases are (i) Analysis, (ii) Design, (iii) Coding, (v) Testing. \"Correction\" (iv) is not a distinct phase in the standard model list."
  },
  {
    question: "The ______ assumes the requirement of a system which can be baseline before the design begins.",
    options: [
      "linear sequential model",
      "rapid application model",
      "incremental model",
      "iterative enhancement model"
    ],
    answer: 0,
    explanation: "Only the Linear Sequential (Waterfall) model assumes requirements can be baselined upfront."
  },
  {
    question: "______ is an incremental software development process model that emphasizes an extremely short development cycle.",
    options: [
      "Linear Sequential Development",
      "Rapid Application Development (RAD)",
      "Incremental Development",
      "Iterative Enhancement"
    ],
    answer: 1,
    explanation: "RAD emphasizes very short development cycles (e.g., 60-90 days)."
  },
  {
    question: "Reliability in a software system can be achieved using which of the following strategies?",
    options: [
      "Fault avoidance",
      "Fault tolerance",
      "Fault detection",
      "All the above"
    ],
    answer: 3,
    explanation: "Reliability engineering uses all three strategies."
  },
  {
    question: "______ involves modifying the system so that the fault does not recur.",
    options: [
      "Failure detection",
      "Damage assessment",
      "Fault recovery",
      "Fault repair"
    ],
    answer: 3,
    explanation: "Fault repair fixes the underlying defect."
  },
  {
    question: "................ is a list of names used by the systems, arranged alphabetically.",
    options: [
      "Data Library",
      "Data Dictionary",
      "Name Dictionary",
      "System Dictionary"
    ],
    answer: 1,
    explanation: "A Data Dictionary defines all names/data elements used in the system."
  },
  {
    question: "______ is the process, which controls the changes made to a system...",
    options: [
      "Software management",
      "Configuration management",
      "Version management",
      "Release management"
    ],
    answer: 1,
    explanation: "Software Configuration Management (SCM) controls changes and versions."
  },
  {
    question: "______ requires developers and customers who are committed to the rapid-fire activities...",
    options: [
      "Waterfall",
      "Rapid Application Development (RAD)",
      "Iterative Development",
      "Incremental Development"
    ],
    answer: 1,
    explanation: "RAD requires intensive commitment from all parties for rapid delivery."
  },
  {
    question: "The iterative enhancement model in software development encompasses which of the following phases:",
    options: [
      "(i), (ii) and (iii) only",
      "(ii), (iii) and (iv) only",
      "(i), (ii) and (iv) only",
      "All (i), (ii), (iii) and (iv)"
    ],
    answer: 3,
    explanation: "Iterative enhancement repeats all phases: Analysis, Design, Coding, and Implementation (or Evaluation)."
  },
  {
    question: "______ model is particularly useful when staffing is unavailable for a complete implementation...",
    options: [
      "Linear Sequential Development",
      "Rapid Application Development",
      "Incremental Development",
      "Iterative Enhancement"
    ],
    answer: 2,
    explanation: "Incremental Development allows delivering core functionality with fewer staff, adding features in later increments."
  },
  {
    question: "Which of the following is NOT the phase consisting on spiral model of software development?",
    options: [
      "Planning",
      "Design",
      "Engineering",
      "Risk-Analysis"
    ],
    answer: 1,
    explanation: "The classic Spiral quadrants are Planning, Risk Analysis, Engineering (Construction), and Evaluation. Design is an activity within Engineering, not a quadrant title itself compared to the others listed."
  },
  {
    question: "Rapid Application Development (RAD) model in software development encompasses which of the following phases?",
    options: [
      "(i), (ii) and (iii) only",
      "(ii), (iii) and (iv) only",
      "(i), (iii) and (iv) only",
      "All (i), (ii), (iii) and (iv)"
    ],
    answer: 3,
    explanation: "RAD phases include Business Modeling, Data Modeling, Process Modeling, and Application Generation."
  },
  {
    question: "Which of the following is/are the different types of system model, which might be produced as part of the analysis process?",
    options: [
      "(i), (ii) and (iii) only",
      "(ii), iii and iv only",
      "(i), (iii) and (iv) only",
      "All (i), (ii), (iii) and iv"
    ],
    answer: 3,
    explanation: "Analysis models include Data-processing, Composition, Classification, and Process models."
  },
  {
    question: "______ may be used to show how the system reacts to internal and external events.",
    options: [
      "Entity-relation diagram",
      "Data flow diagram",
      "Objects class diagram",
      "State transaction diagram (State Transition Diagram)"
    ],
    answer: 3,
    explanation: "State Transition Diagrams show how the system state changes in response to events."
  },
  {
    question: "______ is a way of showing how data is processed by a system.",
    options: [
      "Data flow models",
      "System models",
      "Semantic data models",
      "Objects models"
    ],
    answer: 0,
    explanation: "Data Flow Models (like DFDs) illustrate data processing steps."
  },
  {
    question: "State whether the following statements about data flow model are True or False:",
    options: [
      "True, False",
      "False, True",
      "False, False",
      "True, True"
    ],
    answer: 3,
    explanation: "DFDs show data movement (True). They are simple and intuitive compared to complex interface specs (True)."
  },
  {
    question: "______ have the advantage that unlike some other modeling notations, they are simple and intuitive.",
    options: [
      "Graphical notations",
      "Visual notations",
      "Program description language",
      "Informal text"
    ],
    answer: 0,
    explanation: "Graphical notations (like DFDs) are valued for their simplicity."
  },
  {
    question: "A/An ______ is one of the structured methods of software design, where the system is modeled using the data transformations...",
    options: [
      "data-flow model",
      "structured model",
      "classification model",
      "entity-relation model"
    ],
    answer: 0,
    explanation: "Data-flow models focus on data transformations."
  },
  {
    question: "In ______ models, the system is decomposed into functional models...",
    options: [
      "object-oriented model",
      "domain specific model",
      "control model",
      "data-flow model"
    ],
    answer: 3,
    explanation: "Data-flow models decompose the system into functional transformations."
  },
  {
    question: "A strategy relies on decomposing the system into a set of interacting functions...",
    options: [
      "architectural design",
      "object-oriented design",
      "function oriented design",
      "interface design"
    ],
    answer: 2,
    explanation: "Function Oriented Design relies on functional decomposition."
  },
  {
    question: "Which of the following is NOT the notation used in design documents?",
    options: [
      "Entity-relation diagram",
      "Data flow diagram",
      "Objects class diagram",
      "Informal text"
    ],
    answer: 3,
    explanation: "\"Informal text\" is not a formal diagrammatic notation like ERD, DFD, or Class diagrams."
  },
  {
    question: "Software is considered to be a collection of:",
    options: [
      "programming code",
      "associated libraries",
      "documentations",
      "All of the above"
    ],
    answer: 3,
    explanation: "Software encompasses code, libraries, and documentation."
  },
  {
    question: "Which of the following is the characteristic of good software?",
    options: [
      "Transitional",
      "Operational",
      "Maintenance",
      "All of the above"
    ],
    answer: 3,
    explanation: "Good software has Operational, Transitional (Portability), and Maintenance characteristics."
  },
  {
    question: "The reason for software bugs and failures is due to:",
    options: [
      "Software developers",
      "Software companies",
      "Both (A) and (B)",
      "None of the above"
    ],
    answer: 2,
    explanation: "Repeat of Question 31."
  },
  {
    question: "What are attributes of good software?",
    options: [
      "Software functionality",
      "Software development",
      "Software maintainability",
      "Both (A) and (C)"
    ],
    answer: 3,
    explanation: "Functionality and Maintainability are key quality attributes."
  },
  {
    question: "Which of the following are valid step in SDLC framework?",
    options: [
      "Requirement Gathering",
      "System Analysis",
      "Software Design",
      "All of the above"
    ],
    answer: 3,
    explanation: "All listed are standard SDLC phases."
  },
  {
    question: "Which of the following is not correct model in Software Development Paradigm?",
    options: [
      "Waterfall Model",
      "P model",
      "Spiral Model",
      "V model"
    ],
    answer: 1,
    explanation: "There is no standard \"P model\". (Prototyping exists, but \"P model\" is non-standard)."
  },
  {
    question: "Waterfall model is not suitable for:",
    options: [
      "Small projects",
      "Complex projects",
      "Accommodating changes",
      "Maintenance projects"
    ],
    answer: 2,
    explanation: "Waterfall is rigid and bad at accommodating changes."
  },
  {
    question: "Which type of integration testing uses stubs?",
    options: [
      "Top-down testing",
      "Bottom-up testing",
      "Both in top down and bottom-up",
      "System testing"
    ],
    answer: 0,
    explanation: "Top-down testing uses stubs to simulate lower-level modules."
  },
  {
    question: "The process to gather the software requirements from client, analyze and document them is known as:",
    options: [
      "Feasibility Study",
      "Requirement Gathering",
      "Requirement Engineering",
      "System Requirements Specification"
    ],
    answer: 2,
    explanation: "Requirement Engineering covers elicitation, analysis, and documentation."
  },
  {
    question: "It is the process in which developers discuss with the client and end users and know their expectations from the software:",
    options: [
      "Requirements gathering",
      "Organizing requirements",
      "Negotiation and discussion",
      "Documentation"
    ],
    answer: 0,
    explanation: "This is the definition of Requirements Gathering (Elicitation)."
  },
  {
    question: "Size Metrics denoted by:",
    options: [
      "LOC",
      "KLOC",
      "GLOC",
      "ZLOC"
    ],
    answer: 1,
    explanation: "KLOC (Thousands of Lines of Code) is the standard metric."
  },
  {
    question: "How many phases are there in Brainstorming?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 0,
    explanation: "Brainstorming typically involves two main phases: Idea Generation and Idea Consolidation/Evaluation."
  },
  {
    question: "Which of the following is not an Advantage of modularization ?",
    options: [
      "Smaller components are easier to maintain",
      "Concurrent execution can be made possible",
      "Program cannot be divided based on functional aspects",
      "Desired level of abstraction can be brought in the program"
    ],
    answer: 2,
    explanation: "Programs can and should be divided based on function; saying they \"cannot\" is false, thus not an advantage."
  },
  {
    question: "Which of the following defines the degree of intra-dependability within elements of a module ?",
    options: [
      "Cohesion",
      "Coupling",
      "Design Verification",
      "None of the above"
    ],
    answer: 0,
    explanation: "Cohesion measures the internal strength/dependence within a module."
  },
  {
    question: "Which tool is use for structured designing?",
    options: [
      "Program Chart",
      "Structure chart",
      "Module Chart",
      "All of the above"
    ],
    answer: 1,
    explanation: "Structure Charts are the primary tool for Structured Design."
  },
  {
    question: "Which of the following is the best type of module cohesion ?",
    options: [
      "Functional Cohesion",
      "Temporal Cohesion",
      "Functional Cohesion (Duplicate)",
      "Sequential Cohesion"
    ],
    answer: 0,
    explanation: "Functional Cohesion is the strongest and most desirable type."
  },
  {
    question: "Choose the option that does not define Function Oriented Software Design:",
    options: [
      "It consists of module definitions",
      "Modules represent data abstraction",
      "Modules support functional abstraction",
      "None of the above"
    ],
    answer: 1,
    explanation: "Data abstraction is a characteristic of Object Oriented Design, not Function Oriented Design."
  },
  {
    question: "What is DFD stands for?",
    options: [
      "Data Flowchart Diagram",
      "Data Flow Diagram",
      "Depict Flow Diagram",
      "Data Flow Depicts"
    ],
    answer: 1,
    explanation: "Data Flow Diagram."
  },
  {
    question: "How many levels of DFD are there?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 1,
    explanation: "Typically, DFDs are expanded to 3 levels: Context (0), Level 1, and Level 2."
  },
  {
    question: "The context diagram is also known as:",
    options: [
      "Level-0 DFD",
      "Level-1 DFD",
      "Level-2 DFD",
      "All of the above"
    ],
    answer: 0,
    explanation: "Level-0 DFD is the Context Diagram."
  },
  {
    question: "Which of the following is a function of CASE Tool?",
    options: [
      "Supporting Structured analysis and design (SA/SD)",
      "Maintaining the data dictionary",
      "Checking whether DFDs are balanced or not",
      "All of the above"
    ],
    answer: 3,
    explanation: "CASE tools support analysis, data dictionary maintenance, and consistency checking."
  },
  {
    question: "Which of the following is not true about Software Validation?",
    options: [
      "Validation ensures the product under development is as per the user requirements.",
      "Validation do not emphasize on user requirements.",
      "Validation emphasizes on user requirements.",
      "Validation is carried out at the end of the SDLC"
    ],
    answer: 1,
    explanation: "Validation does emphasize user requirements. Statement (B) is false."
  },
  {
    question: "How many types of software testing exist?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 1,
    explanation: "Broadly, testing is categorized into Manual and Automation (or Black box and White box)."
  },
  {
    question: "SRS stands for:",
    options: [
      "System requirements specification",
      "System responds-software",
      "Software respond system",
      "Software requirements specification"
    ],
    answer: 3,
    explanation: "Software Requirements Specification."
  }
];
