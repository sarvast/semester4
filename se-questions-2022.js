const seQuestions2022 = [
  {
    question: "In OOD, the attributes (data variables and methods) bundled together is called:",
    options: [
      "Classes",
      "Encapsulation",
      "Inheritance",
      "Object"
    ],
    answer: 1,
    explanation: "Encapsulation is the mechanism of bundling data (variables) and methods that operate on them into a single unit (class), restricting access to some components."
  },
  {
    question: "Which coupling is also known as Global Coupling?",
    options: [
      "Content coupling",
      "Stamp coupling",
      "Common coupling",
      "Data coupling"
    ],
    answer: 2,
    explanation: "Common coupling occurs when multiple modules share the same global data (global variables). It is also referred to as Global Coupling."
  },
  {
    question: "What is a measure of how well computer system facilities learnings?",
    options: [
      "Usability",
      "Functionality",
      "Reliability",
      "None of the above"
    ],
    answer: 0,
    explanation: "Usability measures how easy the system is to learn and use. Learnability is a key component of Usability."
  },
  {
    question: "Level-0 DFD is similar to:",
    options: [
      "Use case diagram",
      "Context diagram",
      "System diagram",
      "None of the above"
    ],
    answer: 1,
    explanation: "The Level-0 DFD is also known as the Context Diagram, representing the entire system as a single process interacting with external entities."
  },
  {
    question: "Which testing is the re-execution of some subset of tests that have already been conducted to ensure the changes that are not propagated?",
    options: [
      "Unit testing",
      "Integration testing",
      "Regression testing",
      "Thread-based testing"
    ],
    answer: 2,
    explanation: "Regression testing ensures that recent code changes have not adversely affected existing features."
  },
  {
    question: "Give the advantages of modularization:",
    options: [
      "Smaller components are easier to maintain",
      "Program can be divided based on functional aspects",
      "Desired level of abstraction can be brought in the program",
      "None of the above"
    ],
    answer: 0,
    explanation: "Modularization breaks a large program into smaller, manageable, and maintainable components."
  },
  {
    question: "SRD stands for:",
    options: [
      "Software requirements definition",
      "Software requirements diagram",
      "Structured requirements diagram",
      "Structured requirements definition"
    ],
    answer: 3,
    explanation: "SRD typically stands for Structured Requirements Definition (part of methodologies like JSD). Sometimes Software Requirements Document (SRS/SRD). Given options, D is the formal expansion often used."
  },
  {
    question: "Alpha and Beta testing are forms of:",
    options: [
      "Unit testing",
      "System testing",
      "Integration testing",
      "Acceptance testing"
    ],
    answer: 3,
    explanation: "Alpha and Beta testing are phases of Acceptance Testing performed to validate the system for end-users."
  },
  {
    question: "If the objects focus on the problem domain then we concerned with:",
    options: [
      "Object oriented design",
      "Object Oriented analysis",
      "Object oriented analysis and design",
      "None of the above"
    ],
    answer: 1,
    explanation: "Object-Oriented Analysis (OOA) focuses on understanding the problem domain and identifying objects, while Design (OOD) focuses on the solution domain."
  },
  {
    question: "One of the fault base testing techniques is:",
    options: [
      "Unit testing",
      "Mutation testing",
      "Beta testing",
      "Stress testing"
    ],
    answer: 1,
    explanation: "Mutation testing involves introducing small faults (mutations) into the code to check if test cases detect them."
  },
  {
    question: "Aggregation represents:",
    options: [
      "Is a relationship",
      "Part of relationship",
      "Composed of relationship",
      "None of the above"
    ],
    answer: 1,
    explanation: "Aggregation represents a \"whole-part\" or \"has-a\" relationship where the child can exist independently of the parent."
  },
  {
    question: "If every requirements stated in the software requirement specification:",
    options: [
      "Consistent",
      "Unambiguous",
      "Verifiable",
      "None of the above"
    ],
    answer: 2,
    explanation: "An SRS requirement must be Verifiable (Testable)."
  },
  {
    question: "Which design identifies the software as a system with many components interacting with each other?",
    options: [
      "Architectural design",
      "High-level design",
      "Detailed design",
      "Both (B) and (C)"
    ],
    answer: 0,
    explanation: "Architectural design defines the high-level structure and interaction between major components."
  },
  {
    question: "What is the simplest model of software development paradigm?",
    options: [
      "Big bang model",
      "Spiral model",
      "Waterfall model",
      "V-Model"
    ],
    answer: 2,
    explanation: "The Waterfall Model is traditionally considered the simplest, most linear formal SDLC model."
  },
  {
    question: "Compilers, Editors software come under which type of software?",
    options: [
      "Application software",
      "System software",
      "Scientific software",
      "None of the above"
    ],
    answer: 1,
    explanation: "System software includes tools like compilers, editors, and OS components that support the operation of the computer."
  },
  {
    question: "In Boehm model, ACT stands for:",
    options: [
      "Actual Change Traffic",
      "Actual Change Time",
      "Annual Change Traffic",
      "Annual Change Time"
    ],
    answer: 2,
    explanation: "In Boehm's COCOMO/Maintenance models, ACT stands for Annual Change Traffic."
  },
  {
    question: "Taute maintenance model has:",
    options: [
      "Two phase",
      "Eight phase",
      "Six phase",
      "Ten phase"
    ],
    answer: 1,
    explanation: "The Taute Maintenance Model typically outlines 8 phases for maintenance activity."
  },
  {
    question: "In which model, fixes are done without detailed analysis of the long term effects?",
    options: [
      "Quick-fix model",
      "Reuse oriented model",
      "Taute maintenance model",
      "None of the above"
    ],
    answer: 0,
    explanation: "The Quick-fix model involves patching errors immediately without deep analysis, often leading to structural degradation."
  },
  {
    question: "Iterative enhancement model is a:",
    options: [
      "Three stage model",
      "Four stage model",
      "Two stage model",
      "Seven stage model"
    ],
    answer: 0,
    explanation: "The Iterative Enhancement Model consists of three main stages: Analysis, Design, and Implementation."
  },
  {
    question: "Which one is not a maintenance model:",
    options: [
      "CMM",
      "Quick-fix model",
      "Iterative enhance model",
      "Reuse-oriented model"
    ],
    answer: 0,
    explanation: "CMM (Capability Maturity Model) is a process improvement framework, not a specific software maintenance lifecycle model."
  },
  {
    question: "UML stands for:",
    options: [
      "Unified Modeling Language",
      "Uniform Modeling Language",
      "Unit Modeling Language",
      "Universal Modeling Language"
    ],
    answer: 0,
    explanation: "Standard acronym."
  },
  {
    question: "Which is not a software characteristic?",
    options: [
      "Software is flexible",
      "Software is not manufactured",
      "Software does not wear out",
      "Software is always correct"
    ],
    answer: 3,
    explanation: "Software is not always correct; it contains defects. Characteristics are: engineered (not manufactured), doesn't wear out, flexible."
  },
  {
    question: "During software certification, whom to target:",
    options: [
      "Process",
      "People",
      "Product",
      "All of the above"
    ],
    answer: 3,
    explanation: "Certification can apply to the Process (ISO/CMM), the Product (Testing), and People (Certifications)."
  },
  {
    question: "Which one is software process certification?",
    options: [
      "CISCO certified",
      "ISO-9000",
      "Microsoft certified",
      "Java certified"
    ],
    answer: 1,
    explanation: "ISO-9000 is a quality management/process standard."
  },
  {
    question: "Patch is known as:",
    options: [
      "Routine fixes",
      "Emergency fixes",
      "Critical fixes",
      "None of the above"
    ],
    answer: 1,
    explanation: "A patch is typically released to fix specific bugs or security vulnerabilities quickly (Emergency/Hot fixes)."
  },
  {
    question: "The maintenance initiated by defects in the software:",
    options: [
      "Adaptive maintenance",
      "Corrective maintenance",
      "Perfective maintenance",
      "Preventive maintenance"
    ],
    answer: 1,
    explanation: "Corrective maintenance fixes defects/bugs."
  },
  {
    question: "Which one is not a category of maintenance:",
    options: [
      "Corrective maintenance",
      "Adaptive maintenance",
      "Effective maintenance",
      "Perfective maintenance"
    ],
    answer: 2,
    explanation: "The standard categories are Corrective, Adaptive, Perfective, and Preventive. \"Effective\" is not a standard category."
  },
  {
    question: "Regression testing is related to:",
    options: [
      "Maintenance testing",
      "Functional testing",
      "Data flow testing",
      "Development testing"
    ],
    answer: 0,
    explanation: "Regression testing is a key part of Maintenance testing to ensure new changes don't break old features."
  },
  {
    question: "CASE tools are mainly used while developing which of the following methodologies?",
    options: [
      "RAD",
      "JAD",
      "OO Approach",
      "All of the above"
    ],
    answer: 3,
    explanation: "CASE tools support RAD, JAD, and OO methodologies."
  },
  {
    question: "Which of the following is a drawback of using CASE tool?",
    options: [
      "Standardization of notations and diagrams",
      "Communication between development team member",
      "Reduction of time and effort",
      "Costs associated with the use of the tool"
    ],
    answer: 3,
    explanation: "High cost is a primary drawback. The others are benefits."
  },
  {
    question: "CASE-generated updated documentation enables easier and more reliable identification of software failure causes.",
    options: [
      "False",
      "True",
      "Ambiguous statement",
      "None of the above"
    ],
    answer: 1,
    explanation: "Automated documentation is consistent and helps in tracing errors."
  },
  {
    question: "Logical design errors can be resolved using both classic and real CASE tools:",
    options: [
      "True",
      "False",
      "Ambiguous statement",
      "None of the above"
    ],
    answer: 0,
    explanation: "CASE tools help verify logical consistency in designs."
  },
  {
    question: "What kind of support is provided by the Code Generation CASE tool?",
    options: [
      "Cross referencing queries and requirements tracing",
      "Transformation of design records into application software",
      "Compiling, interpreting or applying interactive debugging code",
      "Transformation of design records into application software AND Compiling..."
    ],
    answer: 1,
    explanation: "Code generators transform design specifications into executable code/application software."
  },
  {
    question: "Which of the following is not a type of CASE tool?",
    options: [
      "Lower",
      "Classic",
      "Middle",
      "Real"
    ],
    answer: 1,
    explanation: "Standard classification includes Upper, Lower, and Integrated. \"Classic\" and \"Real\" are not standard type names in this context."
  },
  {
    question: "CASE tools are used only during the software testing phase.",
    options: [
      "True",
      "False",
      "Ambiguous statement",
      "None of the above"
    ],
    answer: 1,
    explanation: "CASE tools are used throughout the SDLC (Analysis, Design, Coding, Testing, Maintenance)."
  },
  {
    question: "What involves preparing software for external release and keeping track of the system versions that have been released for customer use?",
    options: [
      "System building",
      "Release management",
      "Change management",
      "Version management"
    ],
    answer: 1,
    explanation: "Release management handles the deployment and tracking of external releases."
  },
  {
    question: "The definition and use of configuration management standards is essential for quality certification in:",
    options: [
      "ISO 9000",
      "CMM",
      "CMMI",
      "All of the mentioned"
    ],
    answer: 3,
    explanation: "CM is a key process area in ISO, CMM, and CMMI."
  },
  {
    question: "Which of the following is not a Software Configuration Management Activity?",
    options: [
      "Configuration item identification",
      "Release management",
      "Risk management",
      "Branch management"
    ],
    answer: 2,
    explanation: "Risk Management is a project management activity, not specifically an SCM activity like Identification, Release, or Branching."
  },
  {
    question: "Which of the following option is not tracked by configuration management tools?",
    options: [
      "Tracking of change proposals",
      "Storing versions of system components",
      "Tracking the releases of system versions to customers",
      "None of the mentioned"
    ],
    answer: 3,
    explanation: "SCM tools track all these items (Changes, Versions, Releases)."
  },
  {
    question: "What complements the formal technical review by assessing a configuration object for characteristics that are generally not considered during review?",
    options: [
      "Software configuration management",
      "Software configuration audit",
      "Baseline",
      "None of the mentioned"
    ],
    answer: 1,
    explanation: "A Configuration Audit verifies that the CI matches the specs (Functional/Physical audit)."
  },
  {
    question: "What combines procedures and tools to manage different versions of configuration objects that are created during the software process?",
    options: [
      "Change control",
      "SCIS",
      "Version control",
      "None of the mentioned"
    ],
    answer: 2,
    explanation: "Version Control manages multiple versions of files."
  },
  {
    question: "Software configuration management can be administered in several ways. These include:",
    options: [
      "A single software configuration management team for the whole organization",
      "A separate configuration management team for each project",
      "Software configuration management distributed among the project members",
      "All of the mentioned"
    ],
    answer: 3,
    explanation: "SCM can be centralized, project-based, or distributed."
  },
  {
    question: "Which is a software configuration management concept that helps us to control change without seriously impeding justifiable change?",
    options: [
      "Source code",
      "Baselines",
      "Data model",
      "None of the mentioned"
    ],
    answer: 1,
    explanation: "Baselines provide a stable reference point for controlling change."
  },
  {
    question: "Which of the following categories is part of the output of software process?",
    options: [
      "Computer programs",
      "Documents that describe the computer programs",
      "Data",
      "All of the mentioned"
    ],
    answer: 3,
    explanation: "Software process output includes code, docs, and data."
  },
  {
    question: "The extent to which different modules are dependent upon each other is called?",
    options: [
      "Cohesion",
      "Coupling",
      "Modularity",
      "Stability"
    ],
    answer: 1,
    explanation: "Coupling measures inter-module dependency."
  },
  {
    question: "A system does not interact with external environment is called:",
    options: [
      "Closed system",
      "Logical system",
      "Open system",
      "Hierarchal system"
    ],
    answer: 0,
    explanation: "A Closed System is isolated from its environment."
  },
  {
    question: "The relationship of data elements in a module is called:",
    options: [
      "Coupling",
      "Modularity",
      "Cohesion",
      "None of the above"
    ],
    answer: 2,
    explanation: "Cohesion measures the intra-module relationship strength."
  },
  {
    question: "When two modules refer to the same global data area, they are related as:",
    options: [
      "External coupled",
      "Common coupled",
      "Data coupled",
      "Content coupled"
    ],
    answer: 1,
    explanation: "Common (or Global) coupling occurs via shared global data."
  },
  {
    question: "Temporal cohesion means:",
    options: [
      "Cohesion with respect of time",
      "Cohesion between local variables",
      "Cohesion between temporary variables",
      "Coincidental cohesion"
    ],
    answer: 0,
    explanation: "Temporal cohesion groups tasks executed around the same time."
  },
  {
    question: "Which one is not a strategy for design?",
    options: [
      "Bottom up design",
      "Top down design",
      "Hybrid design",
      "Embedded design"
    ],
    answer: 3,
    explanation: "Embedded is a system type, not a general design strategy like Top-down or Bottom-up."
  },
  {
    question: "The most desirable form of cohesion is:",
    options: [
      "Content cohesion",
      "Functional cohesion",
      "Logical cohesion",
      "Procedural cohesion"
    ],
    answer: 1,
    explanation: "Functional cohesion is the strongest/best type."
  },
  {
    question: "The worst type of coupling is:",
    options: [
      "Common coupling",
      "Content coupling",
      "External coupling",
      "Data coupling"
    ],
    answer: 1,
    explanation: "Content coupling implies one module modifying another's internals, which is the worst form."
  },
  {
    question: "The most desirable form of coupling is:",
    options: [
      "Data coupling",
      "Control coupling",
      "Common coupling",
      "Content coupling"
    ],
    answer: 0,
    explanation: "Data coupling is the loosest/best form (simple parameter passing)."
  },
  {
    question: "Cohesion is the qualitative induction of degree to which a module:",
    options: [
      "On just one thing",
      "Can be written more compactly",
      "Is able to complete function in timely manner",
      "Is connected to other module"
    ],
    answer: 0,
    explanation: "High cohesion means a module focuses on a single, well-defined task (\"On just one thing\")."
  },
  {
    question: "The importance of software is described in single word:",
    options: [
      "Efficiency",
      "Accuracy",
      "Complexity",
      "Quality"
    ],
    answer: 3,
    explanation: "Quality is the encompassing goal of software engineering."
  },
  {
    question: "In design phase, which is primary area of concern?",
    options: [
      "Architecture",
      "Data",
      "Interface",
      "All of the mentioned"
    ],
    answer: 3,
    explanation: "Software Design covers Data, Architecture, Interfaces, and Components."
  },
  {
    question: "______ is the process of translation a task into a series of commands that computer will use to perform that task.",
    options: [
      "Programming",
      "Project design",
      "Installation",
      "System analysis"
    ],
    answer: 0,
    explanation: "Programming (Coding) is writing the instructions."
  },
  {
    question: "Actual programming of software code is done during the ______ step in SDLC.",
    options: [
      "Maintenance and evaluation",
      "Design",
      "Development and Documentation",
      "Analysis"
    ],
    answer: 2,
    explanation: "Coding happens in the Development phase."
  },
  {
    question: "A step by step instruction is used solve a problem is known as:",
    options: [
      "A sequential structure",
      "A list",
      "An Algorithm",
      "A plan"
    ],
    answer: 2,
    explanation: "An Algorithm is a step-by-step procedure."
  },
  {
    question: "Which tool is used for structure design?",
    options: [
      "Structure chart",
      "Program flow chart",
      "Data flow diagram",
      "Module"
    ],
    answer: 0,
    explanation: "Structure Charts are the primary tool for Structured Design."
  },
  {
    question: "Outcome of requirements specification phase is:",
    options: [
      "Software requirements specification",
      "Design document",
      "Test document",
      "None of the above"
    ],
    answer: 0,
    explanation: "The SRS document is the output."
  },
  {
    question: "Context Diagram explains:",
    options: [
      "The overview of the system",
      "The internal view of the system",
      "The entities of the system",
      "None of the above"
    ],
    answer: 0,
    explanation: "The Context Diagram (Level 0 DFD) shows the system boundary and external interactions (overview)."
  },
  {
    question: "APIs stands for:",
    options: [
      "Application Performance Interfaces",
      "Application Performance Integration",
      "Application Programming Interfaces",
      "Application Programming Integration"
    ],
    answer: 2,
    explanation: "Application Programming Interfaces."
  },
  {
    question: "Which one is not a non-functional requirement?",
    options: [
      "Reliability",
      "Efficiency",
      "Stability",
      "Product features"
    ],
    answer: 3,
    explanation: "Product features describe functionality (Functional Requirement). The others are quality attributes (Non-Functional)."
  },
  {
    question: "What requirement gathering method developed at IBM in 1970s is used for managing requirement elicitation?",
    options: [
      "JAD",
      "Traceability",
      "FAST",
      "Both (A) and (B)"
    ],
    answer: 0,
    explanation: "JAD (Joint Application Design) was developed by IBM."
  },
  {
    question: "What kind of approach was introduced for elicitation and modeling to give a functional view of the system?",
    options: [
      "Use cases (by Jacobson)",
      "Fusion (by Coleman)",
      "Object Oriented Design (by Booch)",
      "Object modeling technique (by Rambaugh)"
    ],
    answer: 0,
    explanation: "Use Cases (Jacobson) capture the functional view."
  },
  {
    question: "Which is focused towards the goal of the organization?",
    options: [
      "Requirement gathering",
      "Feasibility analysis",
      "Software requirement specification",
      "Software requirement validation"
    ],
    answer: 1,
    explanation: "Feasibility analysis checks if the project aligns with organizational goals and budget."
  },
  {
    question: "Which document is created by system analyst after the requirement are collected from various stakeholders?",
    options: [
      "Software requirement specification",
      "Software requirement validation",
      "Requirements gathering",
      "Feasibility study"
    ],
    answer: 0,
    explanation: "The SRS is the formal document produced."
  },
  {
    question: "In which elicitation process the developers discuss with the client and end users and know their expectations from the software?",
    options: [
      "Organizing requirements",
      "Requirements gatherings",
      "Negotiation & Discussion",
      "Documentation"
    ],
    answer: 1,
    explanation: "Gathering/Elicitation involves discussing expectations."
  },
  {
    question: "Software requirement specification (SRS) is also known as specification of:",
    options: [
      "Black box testing",
      "Acceptance testing",
      "Integrated testing",
      "White box testing"
    ],
    answer: 0,
    explanation: "SRS defines external behavior, forming the basis for Black Box testing."
  },
  {
    question: "Requirement engineering process includes which of these steps ?",
    options: [
      "Feasibility study",
      "Requirement gathering",
      "Software Requirement specification and validation",
      "All mentioned above"
    ],
    answer: 3,
    explanation: "RE includes Feasibility, Elicitation, Specification, and Validation."
  },
  {
    question: "Which of the following is the understanding of software product limitations... identifying and addressing the impact of project on organization...?",
    options: [
      "Software design",
      "Feasibility analysis",
      "System analysis",
      "Requirement gathering"
    ],
    answer: 2,
    explanation: "System Analysis or Feasibility Analysis covers limitations and organizational impact."
  },
  {
    question: "Which of the following is not defined in a good software requirement specification (SRS) document?",
    options: [
      "Functional Requirement",
      "Algorithm for software implementation",
      "Goals of implementation",
      "Nonfunctional requirement"
    ],
    answer: 1,
    explanation: "SRS specifies *what* to do, not *how* (algorithms/implementation details)."
  },
  {
    question: "Which one is not a characteristic of a good SRS?",
    options: [
      "Correct",
      "Complete",
      "Consistent",
      "Brief"
    ],
    answer: 3,
    explanation: "An SRS must be Correct, Complete, and Consistent. \"Brief\" is not a mandatory quality; it must be comprehensive."
  },
  {
    question: "ERD stands for:",
    options: [
      "Entity relationship diagram",
      "Exit related diagram",
      "Entity relationship design",
      "Exit related design"
    ],
    answer: 0,
    explanation: "Entity Relationship Diagram."
  },
  {
    question: "Which phase is not available in software life cycle?",
    options: [
      "Coding",
      "Testing",
      "Maintenance",
      "Abstraction"
    ],
    answer: 3,
    explanation: "Abstraction is a concept, not a lifecycle phase."
  },
  {
    question: "Most suitable model for new technology that is not well understood is:",
    options: [
      "Waterfall model",
      "RAD model",
      "Iterative enhancement model",
      "Evolutionary development model"
    ],
    answer: 3,
    explanation: "Evolutionary/Prototyping models are best for exploring new/unclear technology or requirements."
  },
  {
    question: "Which one is the most important features of spiral model?",
    options: [
      "Quality management",
      "Risk management",
      "Performance management",
      "Efficiency management"
    ],
    answer: 1,
    explanation: "Risk Management is the defining feature of the Spiral Model."
  },
  {
    question: "If limited user participation is available, which model is to be selected?",
    options: [
      "Waterfall model",
      "Prototyping model",
      "Iterative enhancement model",
      "Any of the above"
    ],
    answer: 0,
    explanation: "Waterfall requires requirements upfront and minimal user interaction during development."
  },
  {
    question: "If user participation is available, which model is to be chosen?",
    options: [
      "waterfall model",
      "Iterative enhancement model",
      "Spiral model",
      "RAD model"
    ],
    answer: 3,
    explanation: "RAD/Prototyping relies heavily on user participation."
  },
  {
    question: "If requirements are frequently changing which model is to be selected?",
    options: [
      "Water fall",
      "Prototyping",
      "RAD model",
      "Iterative"
    ],
    answer: 1,
    explanation: "Prototyping handles changing requirements well."
  },
  {
    question: "If requirements are easily understandable and defined, which model is best suited?",
    options: [
      "Waterfall",
      "Prototyping model",
      "Spiral model",
      "None of the above"
    ],
    answer: 0,
    explanation: "Waterfall is ideal for stable, well-defined requirements."
  },
  {
    question: "RAD model was proposed by:",
    options: [
      "Lucent technologies",
      "Motorola",
      "IBM",
      "Microsoft"
    ],
    answer: 2,
    explanation: "James Martin (IBM) developed RAD."
  },
  {
    question: "RAD stands for:",
    options: [
      "Rapid application development",
      "Relative application development",
      "Ready application development",
      "Repeated application development"
    ],
    answer: 0,
    explanation: "Rapid Application Development."
  },
  {
    question: "Validation is:",
    options: [
      "Checking the product with respect to customer expectations",
      "Checking the product with respect to specifications",
      "Checking the product with respect to the constrains of the project",
      "All of the above"
    ],
    answer: 0,
    explanation: "Validation ensures \"Are we building the right product?\" (Customer expectations). Verification (B) checks specifications."
  },
  {
    question: "SRS stands for:",
    options: [
      "Software requirement specification",
      "Software requirements solutions",
      "System requirements specification",
      "None of the above"
    ],
    answer: 0,
    explanation: "Standard acronym."
  },
  {
    question: "SDLC stands for:",
    options: [
      "Software design life cycle",
      "Software development life cycle",
      "System development life cycle",
      "System design life cycle"
    ],
    answer: 1,
    explanation: "Software Development Life Cycle."
  },
  {
    question: "Which model is not a software life cycle model?",
    options: [
      "Waterfall model",
      "Spiral model",
      "Prototyping model",
      "Capability maturity model"
    ],
    answer: 3,
    explanation: "CMM is a process improvement framework, not a development lifecycle model."
  },
  {
    question: "Which model is most popular for student's small project?",
    options: [
      "Waterfall model",
      "Spiral model",
      "Quick and fix model (Build and Fix)",
      "Prototyping model"
    ],
    answer: 2,
    explanation: "Students often use Build & Fix (coding without formal design). Waterfall is also common academically."
  },
  {
    question: "______ is not suitable for accommodating any change?",
    options: [
      "Waterfall model",
      "RAD model",
      "Build & Fix model",
      "Prototyping model"
    ],
    answer: 0,
    explanation: "Waterfall is rigid and sequential, making changes difficult."
  },
  {
    question: "______ is a software development life cycle model that is chosen if the development team has less experience on similar projects.",
    options: [
      "Iterative enhancement model",
      "RAD",
      "Spiral",
      "Waterfall"
    ],
    answer: 2,
    explanation: "Spiral model reduces risk, which is high with inexperienced teams."
  },
  {
    question: "______ is not a fundamental activity for software processes in software development.",
    options: [
      "Evolution",
      "Design and Implementation",
      "Verification",
      "Validation"
    ],
    answer: 2,
    explanation: "Generally, Verification is considered part of Validation or Quality Assurance, whereas Evolution, Development (Design/Imp), and Validation/Specification are core top-level activities."
  },
  {
    question: "Which of the following the CASE tools?",
    options: [
      "Central Repository",
      "Integrated case tools",
      "Upper case tools",
      "All to the mentioned"
    ],
    answer: 3,
    explanation: "All listed are components or types of CASE tools."
  },
  {
    question: "Who proposed the spiral model?",
    options: [
      "IBM",
      "Pressman",
      "Royce",
      "Barry Boehm"
    ],
    answer: 3,
    explanation: "Barry Boehm."
  },
  {
    question: "Attributes of good software is",
    options: [
      "Development",
      "Functionality",
      "Maintainability & functionality",
      "Maintainability"
    ],
    answer: 2,
    explanation: "Functionality and Maintainability are key attributes."
  },
  {
    question: "What is functional requirement?",
    options: [
      "Specifies the tasks the program should not complete",
      "Specifies the tasks the program must complete",
      "Specifies the tasks the program must not work",
      "All of the mentioned"
    ],
    answer: 1,
    explanation: "Functional requirements define what the system *must* do."
  },
  {
    question: "CASE stands for:",
    options: [
      "Control Aided Science and Engineering",
      "Computer-Aided Software Engineering",
      "Cost Aided system experiments",
      "None of the mentioned character"
    ],
    answer: 1,
    explanation: "Computer-Aided Software Engineering."
  },
  {
    question: "______ is defined as the process of generating analysis and designing documents?",
    options: [
      "Reverse Engineering",
      "Re-engineering",
      "Software Re-engineering",
      "More than one method..."
    ],
    answer: 0,
    explanation: "Reverse Engineering involves analyzing code to create higher-level abstractions (design docs)."
  },
  {
    question: "Who is the father of software engineering?",
    options: [
      "Watts S. Humphrey",
      "Margaret Hamilton",
      "Alan Turing",
      "Boris Beizer"
    ],
    answer: 0,
    explanation: "Watts S. Humphrey."
  },
  {
    question: "What is software Engineering?",
    options: [
      "Testing a software",
      "Application of engineering principles to the design a software",
      "Designing a software page",
      "None of the above"
    ],
    answer: 1,
    explanation: "Definition: Application of engineering principles to software."
  }
];
