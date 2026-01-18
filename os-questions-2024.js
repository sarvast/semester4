const osQuestions2024 = [
  {
    "question": "Which is not the function of the Operating System?",
    "options": [
      "Memory management",
      "Disk management",
      "Application management",
      "Virus Protection"
    ],
    "correct": 3,
    "explanation": "While modern OSs include security features, Virus Protection is typically considered a separate utility application software, whereas memory, disk, and process (application) management are core kernel functions."
  },
  {
    "question": "When a process is in a \"Blocked\" state waiting for some I/O service. When the service is completed, it goes to the:",
    "options": [
      "Terminated state",
      "Suspended state",
      "Running state",
      "Ready state"
    ],
    "correct": 3,
    "explanation": "After an I/O operation completes, a process moves from the Blocked/Waiting state to the Ready state to wait for the CPU."
  },
  {
    "question": "A deadlock avoidance algorithm dynamically examines the ______ to ensure that a circular wait condition can never exist.",
    "options": [
      "Operating system",
      "Resources",
      "System storage state",
      "Resource allocation state"
    ],
    "correct": 3,
    "explanation": "Deadlock avoidance (like Banker's Algorithm) examines the Resource allocation state to ensure the system stays in a Safe State."
  },
  {
    "question": "To access the services of the operating system, the interface is provided by the:",
    "options": [
      "Library",
      "API",
      "System calls",
      "Assembly instructions"
    ],
    "correct": 2,
    "explanation": "System calls provide the interface between a running program and the operating system kernel."
  },
  {
    "question": "Operating systems provides a layer, user friendly interface.",
    "options": [
      "True",
      "False"
    ],
    "correct": 0,
    "explanation": "One of the primary goals of an OS is to provide a convenient (user-friendly) interface for users to interact with hardware."
  },
  {
    "question": "The operating system is responsible for:",
    "options": [
      "Bad-block recovery",
      "Booting from disk",
      "Disk initialization",
      "All of the mentioned"
    ],
    "correct": 3,
    "explanation": "The OS handles low-level disk management tasks including initialization, booting, and handling bad blocks."
  },
  {
    "question": "Network operating system runs on both server and every system in the network:",
    "options": [
      "True",
      "False"
    ],
    "correct": 1,
    "explanation": "A Network Operating System (NOS) typically runs on a dedicated server to manage network resources, while client machines run their own client operating systems."
  },
  {
    "question": "To access the ______ of the operating system, the interface is provided by the system calls.",
    "options": [
      "Library",
      "Assembly instructions",
      "Services",
      "API"
    ],
    "correct": 2,
    "explanation": "System calls allow user-level processes to request Services (like I/O, process creation) from the kernel."
  },
  {
    "question": "CPU scheduling is the basis of multi-programming operating systems.",
    "options": [
      "True",
      "False"
    ],
    "correct": 0,
    "explanation": "Multiprogramming relies on switching the CPU among processes to maximize utilization, which requires scheduling."
  },
  {
    "question": "______ is the concept in which a process is copied into the main memory from the secondary memory according to the requirement.",
    "options": [
      "Paging",
      "Demand paging",
      "Segmentation",
      "Swapping"
    ],
    "correct": 1,
    "explanation": "Demand paging loads pages into memory only when they are needed (demanded) during execution."
  },
  {
    "question": "Program becomes process when file loaded into memory.",
    "options": [
      "Object",
      "Executable",
      "Source",
      "Class"
    ],
    "correct": 1,
    "explanation": "An Executable file (program) becomes a process when it is loaded into memory and execution begins."
  },
  {
    "question": "A systematic procedure for moving the CPU to new process is known as:",
    "options": [
      "Syncronous",
      "Deadlock",
      "Starvation",
      "Context switch"
    ],
    "correct": 3,
    "explanation": "A Context Switch is the process of saving the state of the current process and restoring the state of a different process."
  },
  {
    "question": "Multitasking Operating Systems are also known as..........systems.",
    "options": [
      "Network",
      "Distributed",
      "Time-sharing",
      "Multi-programming"
    ],
    "correct": 2,
    "explanation": "Time-sharing systems are an extension of multiprogramming that provide multitasking capability."
  },
  {
    "question": "A program that is loaded into memory and executing is commonly referred to as a:",
    "options": [
      "File",
      "Process",
      "Data",
      "Directory"
    ],
    "correct": 1,
    "explanation": "The standard definition of a Process is a program in execution."
  },
  {
    "question": "....increases CPU utilization by organizing jobs so that the CPU always has one to execute.",
    "options": [
      "Network",
      "Distributed",
      "Time-sharing",
      "Multi-programming"
    ],
    "correct": 3,
    "explanation": "Multi-programming ensures the CPU is never idle by keeping multiple jobs in memory."
  },
  {
    "question": "The heads of the magnetic disk are attached to a ______ that moves all the heads as a unit.",
    "options": [
      "Spindle",
      "Disk arm",
      "Track",
      "None of the mentioned"
    ],
    "correct": 1,
    "explanation": "The Disk arm (or actuator arm) moves the read/write heads across the platters."
  },
  {
    "question": "By using the specific system call, we can:",
    "options": [
      "Open The File",
      "Read The File",
      "Write Into The File",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "System calls like open(), read(), and write() handle all these file operations."
  },
  {
    "question": "In contiguous allocation:",
    "options": [
      "each file must occupy a set of contiguous blocks on the disk",
      "each file is a linked list of disk blocks",
      "all the pointers to scattered blocks are placed together in one location",
      "none of the mentioned"
    ],
    "correct": 0,
    "explanation": "Contiguous allocation requires files to be stored in sequential blocks."
  },
  {
    "question": ".....refers to putting data of various I/O jobs in a buffer.",
    "options": [
      "Buffer",
      "Spooling",
      "Swapping",
      "Switching"
    ],
    "correct": 1,
    "explanation": "Spooling (Simultaneous Peripheral Operations On-Line) uses a buffer (usually on disk) to hold jobs for devices like printers."
  },
  {
    "question": "For system protection, a process should access:",
    "options": [
      "All the resources",
      "Only those resources for which it has authorization",
      "Few resources but authorization is not required",
      "All of the mentioned"
    ],
    "correct": 1,
    "explanation": "Protection ensures processes access only authorized resources."
  },
  {
    "question": "The OS manages the communications between the processors. They communicate with each other through various communication lines. This environment known as:",
    "options": [
      "Network",
      "Distributed",
      "Time-sharing",
      "Real-Time"
    ],
    "correct": 1,
    "explanation": "This describes a Distributed System (loosely coupled)."
  },
  {
    "question": "The number of processes completed per unit time is known as:",
    "options": [
      "Output",
      "Throughput",
      "Efficiency",
      "Capacity"
    ],
    "correct": 1,
    "explanation": "Throughput is the measure of work done (processes completed) over time."
  },
  {
    "question": "Dived logical memory into blocks with the same size as frames are called:",
    "options": [
      "Pages",
      "Frames",
      "Page Table",
      "Segmentation"
    ],
    "correct": 0,
    "explanation": "Logical memory is divided into Pages, which map to physical Frames."
  },
  {
    "question": "The ......... is the module that gives a process control over the CPU after it has been selected by the short-term scheduler.",
    "options": [
      "Dispatcher",
      "Scheduler",
      "Controller",
      "Interrupt"
    ],
    "correct": 0,
    "explanation": "The Dispatcher performs the actual context switch and passing of control."
  },
  {
    "question": "The SJF algorithm executes first the job:",
    "options": [
      "That last entered the queue",
      "That first entered the queue",
      "That has been in the queue the longest",
      "With the least processor needs"
    ],
    "correct": 3,
    "explanation": "Shortest Job First selects the job with the smallest next CPU burst (least processor needs)."
  },
  {
    "question": "Page-Table Length Register (PTLR) indicates size of:",
    "options": [
      "Page Table",
      "Paging File",
      "Main Memory",
      "Virtual Memory"
    ],
    "correct": 0,
    "explanation": "PTLR stores the size of the Page Table."
  },
  {
    "question": "Which is not application software?",
    "options": [
      "Windows NT",
      "Page Maker",
      "Win Word XP",
      "Photoshop"
    ],
    "correct": 0,
    "explanation": "Windows NT is an Operating System (System Software), not Application Software."
  },
  {
    "question": "The operating system is the most common type of ______ Software.",
    "options": [
      "Communication",
      "Application",
      "System",
      "Word processing software"
    ],
    "correct": 2,
    "explanation": "An OS is the fundamental System Software."
  },
  {
    "question": "Which of the following is not a resource that may be allocated by operating system?",
    "options": [
      "CPU",
      "File system",
      "Memory",
      "Storage device"
    ],
    "correct": 1,
    "explanation": "The CPU, Memory, and Devices are resources. The File System is an organizational structure/method implemented by the OS, not a hardware resource allocated to a process in the same sense."
  },
  {
    "question": "In what way is an operating system look like a government?",
    "options": [
      "It performs most useful functions by itself",
      "It creates an environment within which other programs can do useful work",
      "It does not often function correctly",
      "It is always concerned primarily with the individual's needs"
    ],
    "correct": 1,
    "explanation": "Like a government, an OS provides the environment and services for other programs to function but performs no useful application function itself."
  },
  {
    "question": "What is the name given to the organized collection of software that controls the overall operation of a computer?",
    "options": [
      "Working System",
      "Operating System",
      "Controlling System",
      "Peripheral System"
    ],
    "correct": 1,
    "explanation": "Definition of an Operating System."
  },
  {
    "question": "The processors do not share memory or a clock. Instead, each processor has its own local memory.",
    "options": [
      "Network",
      "Distributed",
      "Time-sharing",
      "Real-Time"
    ],
    "correct": 1,
    "explanation": "This is the definition of a Distributed System (specifically, a loosely coupled one)."
  },
  {
    "question": "To access the services of the operating system, the interface is provided by the:",
    "options": [
      "System calls",
      "API",
      "Library",
      "Assembly instructions"
    ],
    "correct": 0,
    "explanation": "System Calls provide the interface."
  },
  {
    "question": "What is the name of the technique in which the operating system of a computer executes several programs concurrently by switching back and forth between them?",
    "options": [
      "Paging",
      "Windowing",
      "Partitioning",
      "Multitasking"
    ],
    "correct": 3,
    "explanation": "Multitasking involves rapid switching between programs to create the illusion of concurrency."
  },
  {
    "question": "Device driver required in?",
    "options": [
      "Register",
      "Main memory",
      "Disk",
      "Cache"
    ],
    "correct": 2,
    "explanation": "Device drivers are required to control devices like the Disk. They reside on the disk and are loaded into memory."
  },
  {
    "question": "The most optimal CPU scheduling algorithm is:",
    "options": [
      "Shortest job first",
      "First Come First Serve",
      "Round robin",
      "None of the above"
    ],
    "correct": 0,
    "explanation": "SJF is provably optimal in terms of minimizing average waiting time."
  },
  {
    "question": "A......... is a sequence of bits, bytes, lines or records.",
    "options": [
      "Directory",
      "File",
      "Drive",
      "Pen Drive"
    ],
    "correct": 1,
    "explanation": "This is the standard definition of a File."
  },
  {
    "question": "FIFO scheduling is a type of:",
    "options": [
      "Non-Preemptive Scheduling",
      "Preemptive Scheduling",
      "Dead line scheduling",
      "None of the above"
    ],
    "correct": 0,
    "explanation": "FIFO (or FCFS) runs a process until it finishes or blocks; it does not preempt."
  },
  {
    "question": "______ file organization provides, accessing the records directly.",
    "options": [
      "Random Access",
      "Sequential Access",
      "Index Access",
      "Index Sequential Access"
    ],
    "correct": 0,
    "explanation": "Random (or Direct) Access allows jumping to any record immediately."
  },
  {
    "question": "External fragmentation is a major issue with this type of allocation technique.",
    "options": [
      "Index allocation",
      "Linked allocation",
      "Sequential allocation",
      "Contiguous allocation"
    ],
    "correct": 3,
    "explanation": "Contiguous allocation requires continuous free space, leading to fragmentation as files are deleted."
  },
  {
    "question": "______ is inefficient in case of direct access file.",
    "options": [
      "Index allocation",
      "Linked allocation",
      "Sequential allocation",
      "Contiguous allocation"
    ],
    "correct": 1,
    "explanation": "Linked allocation requires traversing pointers from the beginning, making direct access (random access) inefficient."
  },
  {
    "question": "Each file has its own index block which stores the addresses of disk space occupied by the file:",
    "options": [
      "Index allocation",
      "Linked allocation",
      "Sequential allocation",
      "Contiguous allocation"
    ],
    "correct": 0,
    "explanation": "This is the definition of Index allocation."
  },
  {
    "question": "The duty of the ______ scheduler is to bring the process from the JOB pool to the ready state for its execution.",
    "options": [
      "Short-term",
      "Long-term",
      "Medium-term",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "The Long-term scheduler (Job Scheduler) selects jobs from the pool and loads them into memory."
  },
  {
    "question": "...are special system software which handle process scheduling in various ways.",
    "options": [
      "Dispatcher",
      "Scheduler",
      "Controller",
      "Interrupt"
    ],
    "correct": 1,
    "explanation": "Schedulers are the software components responsible for process scheduling."
  },
  {
    "question": "Short-Term Scheduler is also known as ______ scheduler.",
    "options": [
      "job",
      "process",
      "CPU",
      "memory"
    ],
    "correct": 2,
    "explanation": "The short-term scheduler selects which process gets the CPU next."
  },
  {
    "question": "The only work of scheduler is selection of:",
    "options": [
      "Processes",
      "Memory",
      "Data",
      "Job"
    ],
    "correct": 0,
    "explanation": "Schedulers select Processes (or jobs) to be executed."
  },
  {
    "question": "Which of the following is NOT a valid deadlock prevention scheme?",
    "options": [
      "Release all resources before requesting a new resource",
      "Number the resources uniquely and never request a lower numbered resource...",
      "Never request a resource after releasing any resource",
      "Request and all required resources be allocated before execution"
    ],
    "correct": 2,
    "explanation": "\"Never request a resource after releasing any resource\" is a description of the shrinking phase of Two-Phase Locking, not a standard Deadlock Prevention scheme."
  },
  {
    "question": "OS classifies the threads as:",
    "options": [
      "Motherboard level",
      "Kernel and user level",
      "CPU level",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "Threads are classified as User-level threads or Kernel-level threads."
  },
  {
    "question": "The duty of the ______ scheduler is to schedule the process from the ready state to the running state.",
    "options": [
      "Short-term",
      "Long-term",
      "Medium-term",
      "None of the above"
    ],
    "correct": 0,
    "explanation": "The Short-term scheduler selects processes from the ready queue to run on the CPU."
  },
  {
    "question": "First-In-First-Out (FIFO) scheduling is:",
    "options": [
      "Non-Preemptive Scheduling",
      "Preemptive Scheduling",
      "Fair Share Scheduling",
      "Deadline Scheduling"
    ],
    "correct": 0,
    "explanation": "FIFO is non-preemptive."
  },
  {
    "question": "Booting means Switch off the computer.",
    "options": [
      "True",
      "False"
    ],
    "correct": 1,
    "explanation": "Booting means starting up the computer."
  },
  {
    "question": "User action such as keystroke or mouse click are referred to as:",
    "options": [
      "Interrupt",
      "Tasks",
      "Processes",
      "Event"
    ],
    "correct": 3,
    "explanation": "In the context of user interaction, these are typically called Events (which trigger interrupts)."
  },
  {
    "question": "Sharing the processor, when two or more programs reside in memory at the same time, is referred as:",
    "options": [
      "Batch",
      "Multi-programming",
      "Multi-tasking",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "This is the core definition of Multi-programming."
  },
  {
    "question": "Which of the following is not a resource that may be allocated by operating system?",
    "options": [
      "CPU",
      "File system",
      "Memory",
      "Storage device"
    ],
    "correct": 1,
    "explanation": "The File System is a storage method, not a hardware resource like CPU/Memory."
  },
  {
    "question": "Which computer systems that were designed primarily as batch systems have been modified to time sharing systems.",
    "options": [
      "DOS",
      "Time-sharing system",
      "Network system",
      "None of the above"
    ],
    "correct": 3,
    "explanation": "This likely refers to specific legacy mainframe systems not listed here."
  },
  {
    "question": "______ use multiple central processors to serve multiple real-time applications and multiple users.",
    "options": [
      "Network system",
      "Central system",
      "Distributed System",
      "DOS system"
    ],
    "correct": 2,
    "explanation": "Distributed systems use multiple processors communicating to serve users."
  },
  {
    "question": "Loosely coupled systems are also know as:",
    "options": [
      "Network system",
      "Central system",
      "Distributed System",
      "DOS"
    ],
    "correct": 2,
    "explanation": "Loosely coupled systems are Distributed Systems."
  },
  {
    "question": "A......... runs on a server and provides the server the capability to manage data, user's, groups, security, applications, and other networking functions.",
    "options": [
      "Network system",
      "Central system",
      "Distributed System",
      "DOS"
    ],
    "correct": 0,
    "explanation": "This describes a Network Operating System (NOS)."
  },
  {
    "question": "The time taken by the system to respond to an input and display of required updated information is termed as the:",
    "options": [
      "Seek time",
      "Response time",
      "Edit time",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "Response time is the time from submission of a request until the first response is produced."
  },
  {
    "question": "A ______ must have well-defined, fixed time constraints, otherwise the system will fail.",
    "options": [
      "Network OS",
      "Real-time OS",
      "Distributed System",
      "DOS"
    ],
    "correct": 1,
    "explanation": "Real-time Operating Systems (RTOS) are defined by strict adherence to time constraints."
  },
  {
    "question": "Memory Management scheme for a specific system depends on many factors, especially on the............ of the system.",
    "options": [
      "Software design",
      "Hardware design",
      "File design",
      "Memory design"
    ],
    "correct": 1,
    "explanation": "Memory management relies heavily on hardware support (MMU, TLB, etc.)."
  },
  {
    "question": "In ........ a process address space is broken into fixed sized blocks called pages.",
    "options": [
      "Memory",
      "Segmentation",
      "Paging",
      "File"
    ],
    "correct": 2,
    "explanation": "Paging is the technique of dividing address space into fixed-size blocks (pages)."
  },
  {
    "question": "It becomes possible to have the computer read data from a tape, write data to disk and to write out to a tape printer while it is doing its computing task.",
    "options": [
      "Buffer",
      "Spooling",
      "Swapping",
      "Switching"
    ],
    "correct": 1,
    "explanation": "Spooling (Simultaneous Peripheral Operations On-Line) allows overlapping I/O of different jobs with computation."
  },
  {
    "question": "Which of the following is not an operating system?",
    "options": [
      "Linux",
      "DOS",
      "Oracle",
      "Windows"
    ],
    "correct": 2,
    "explanation": "Oracle is a Database Management System (DBMS), not an OS."
  },
  {
    "question": "When can the binding of instructions and data to memory addresses be done?",
    "options": [
      "Load time",
      "Compile time",
      "Execution time",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Address binding can happen at compile, load, or execution time."
  },
  {
    "question": "This operating system was developed by an American company Microsoft:",
    "options": [
      "MS Office",
      "Windows",
      "Linux",
      "Unix"
    ],
    "correct": 1,
    "explanation": "Windows is Microsoft's OS."
  },
  {
    "question": "Two types of atomic operations performed by semaphores?",
    "options": [
      "Wait, signal",
      "Wait, stop",
      "Signal, stop",
      "Signal, wait"
    ],
    "correct": 0,
    "explanation": "The standard operations are Wait (P) and Signal (V)."
  },
  {
    "question": "Is mutual exclusion required for shareable resources?",
    "options": [
      "Yes",
      "No",
      "May be",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "Shareable resources (read-only) do not require mutual exclusion as multiple processes can access them simultaneously without error."
  },
  {
    "question": "A process which is copied from main memory to secondary memory on the basis of requirement is known as:",
    "options": [
      "Demand Paging",
      "Paging",
      "Threads",
      "Segmentation"
    ],
    "correct": 0,
    "explanation": "Demand Paging is the specific technique where pages are moved between main and secondary memory based on requirement."
  },
  {
    "question": "______ is capable of overlapping I/O operation for one job with processor operations for another job.",
    "options": [
      "Buffer",
      "Spooling",
      "Swapping",
      "Switching"
    ],
    "correct": 1,
    "explanation": "Spooling allows this overlap."
  },
  {
    "question": "Among the following, which is an example of a spooled device?",
    "options": [
      "A line printer that prints the output of a number of jobs.",
      "A terminal that inputs user data",
      "A I/O device to display graphics.",
      "None of the above"
    ],
    "correct": 0,
    "explanation": "Printers are the classic example of devices that require spooling."
  },
  {
    "question": "Which of the following is not a part of the operating system?",
    "options": [
      "Input/output control program",
      "Job control program",
      "Supervisor",
      "Performance monitor"
    ],
    "correct": 3,
    "explanation": "A Performance monitor is typically an external system utility or application."
  },
  {
    "question": "The interval from the time of submission of a process to the time of completion is termed as:",
    "options": [
      "Waiting time",
      "Turnaround time",
      "Response time",
      "Throughput"
    ],
    "correct": 1,
    "explanation": "This is the definition of Turnaround time."
  },
  {
    "question": "Thread is a :",
    "options": [
      "Light weight",
      "Heavy weight",
      "Multi weight",
      "None of the above"
    ],
    "correct": 0,
    "explanation": "A thread is often called a Lightweight Process."
  },
  {
    "question": "In priority scheduling algorithm:",
    "options": [
      "CPU is allocated to the process with highest priority",
      "CPU is allocated to the process with lowest priority",
      "Equal priority processes can not be scheduled",
      "All of the mentioned"
    ],
    "correct": 0,
    "explanation": "The CPU is given to the process with the highest priority."
  },
  {
    "question": "Process are classified into different groups in:",
    "options": [
      "Shortest job scheduling algorithm",
      "Round robin scheduling algorithm",
      "Priority scheduling algorithm",
      "Multilevel queue scheduling algorithm"
    ],
    "correct": 3,
    "explanation": "Multilevel queue scheduling partitions the ready queue into separate queues (groups) with different scheduling needs."
  },
  {
    "question": "File type can be represented by:",
    "options": [
      "File name",
      "File extension",
      "File identifier",
      "None of the mentioned"
    ],
    "correct": 1,
    "explanation": "The File extension (e.g., .txt, .exe) indicates the file type."
  },
  {
    "question": "The operating system must guarantee response to events within fixed periods of time to ensure correct performance. This is:",
    "options": [
      "Network",
      "Distributed",
      "Time-sharing",
      "None of the above"
    ],
    "correct": 3,
    "explanation": "This describes a Real-Time OS."
  },
  {
    "question": "In operating Systems, which of the following is/are CPU scheduling algorithms?",
    "options": [
      "Round Robin",
      "Shortest Job First",
      "Priority",
      "All of the mentioned"
    ],
    "correct": 3,
    "explanation": "All listed are standard scheduling algorithms."
  },
  {
    "question": "The time taken to move the disk arm to the desired cylinder is called the:",
    "options": [
      "Positioning time",
      "Random access time",
      "Seek time",
      "Rotational latency"
    ],
    "correct": 2,
    "explanation": "Seek time is the time for the disk arm to move to the correct track/cylinder."
  },
  {
    "question": "External fragmentation reduced by the method known as:",
    "options": [
      "memory management",
      "process editing",
      "compaction",
      "file editing"
    ],
    "correct": 2,
    "explanation": "Compaction shuffles memory contents to place all free memory together in one large block."
  },
  {
    "question": "A process which is copied from main memory to secondary memory on the basis of requirement is known as:",
    "options": [
      "Demand paging",
      "Thread",
      "Segment",
      "CPU"
    ],
    "correct": 0,
    "explanation": "Demand Paging."
  },
  {
    "question": "A........... can run in two modes - user mode and kernel mode.",
    "options": [
      "File",
      "Memory",
      "Process",
      "Data"
    ],
    "correct": 2,
    "explanation": "A Process executes in user mode for user code and switches to kernel mode (via system calls) for OS code."
  },
  {
    "question": "As per ______ operating system should be convenient to use, easy to learn, reliable, safe, and fast.",
    "options": [
      "System goal",
      "User goal",
      "Data goal",
      "Process goal"
    ],
    "correct": 1,
    "explanation": "Convenience and ease of use are User goals."
  },
  {
    "question": "A ........ condition is a situation that may occur inside a critical section.",
    "options": [
      "Mutual",
      "Race",
      "Edit",
      "Entry"
    ],
    "correct": 1,
    "explanation": "A Race Condition occurs when the outcome depends on the order of execution in a critical section."
  },
  {
    "question": "Atomic action is required in a critical section i.e. only one process can execute in its critical section at a time. This is :",
    "options": [
      "Two process",
      "Thread",
      "One process",
      "Two thread"
    ],
    "correct": 2,
    "explanation": "The principle is Mutual Exclusion, meaning Only One process can be in the critical section."
  },
  {
    "question": "______ is used for exchanging data between multiple threads in one or more processes or programs.",
    "options": [
      "Synchronization",
      "Inter process communication",
      "Semaphore",
      "Queue"
    ],
    "correct": 1,
    "explanation": "Inter Process Communication (IPC) mechanisms allow data exchange."
  },
  {
    "question": "______ process can affect or be affected by the execution of another process.",
    "options": [
      "Independent",
      "Free",
      "Running",
      "Cooperating"
    ],
    "correct": 3,
    "explanation": "A Cooperating process can affect or be affected by others."
  },
  {
    "question": "Ensure that a system will never enter an unsafe state. is known as:",
    "options": [
      "Detection",
      "Avoidance",
      "Deadlock",
      "Resource graph"
    ],
    "correct": 1,
    "explanation": "Deadlock Avoidance algorithms ensure the system always remains in a safe state."
  },
  {
    "question": "Multiple instances of a resource type Use the:",
    "options": [
      "Resource allocation graph",
      "Deadlock detection",
      "Banker's algorithm",
      "None of the above"
    ],
    "correct": 2,
    "explanation": "The Banker's Algorithm is designed to handle deadlock avoidance in systems with multiple instances of each resource type."
  },
  {
    "question": "At first, operating systems were written in assembly.",
    "options": [
      "True",
      "False"
    ],
    "correct": 0,
    "explanation": "Early OSs were written in assembly for performance and hardware control."
  },
  {
    "question": "An operating system is a program that acts as an interface between the user and the computer hardware and controls the ______ of all kinds of programs.",
    "options": [
      "Read",
      "Write",
      "Execution",
      "End"
    ],
    "correct": 2,
    "explanation": "The OS controls the Execution of programs."
  },
  {
    "question": "Using higher level languages allows the code to be written slow.",
    "options": [
      "True",
      "False"
    ],
    "correct": 1,
    "explanation": "Higher-level languages allow code to be written faster, not slower."
  },
  {
    "question": "Keeps tracks of processor and status of process, is know as:",
    "options": [
      "Process Management",
      "Device Management",
      "Memory Management",
      "None of the above"
    ],
    "correct": 0,
    "explanation": "Tracking processor status and processes is Process Management (Traffic Controller)."
  },
  {
    "question": "Secondary storage ______ extension of main memory that provides large storage capacity.",
    "options": [
      "Volatile",
      "Nonvolatile",
      "RAM",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "Secondary storage is Nonvolatile."
  },
  {
    "question": "A file system is normally organized into directories for easy .......... and usage.",
    "options": [
      "Edit",
      "Navigation",
      "Analysis",
      "Discussion"
    ],
    "correct": 1,
    "explanation": "Directories are used for organization and Navigation."
  },
  {
    "question": "Operating system act as a teacher of all hardware and software devices in our computer system.",
    "options": [
      "True",
      "False"
    ],
    "correct": 1,
    "explanation": "The OS acts as a Manager or Resource Allocator, not a teacher."
  },
  {
    "question": "Keeps track of information, location, uses, status etc. It is known as:",
    "options": [
      "Memory system",
      "File system",
      "Device system",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "The File System tracks file information, location, and status."
  },
  {
    "question": "Keeps track of time and resources used by various jobs and users. It is known as:",
    "options": [
      "Memory Management",
      "File Management",
      "Job Accounting",
      "Security"
    ],
    "correct": 2,
    "explanation": "Job Accounting tracks resource usage for billing or statistics."
  },
  {
    "question": "Which of the following are CPU scheduling algorithms?",
    "options": [
      "Token bucket",
      "Sampling",
      "System call",
      "None of the above"
    ],
    "correct": 3,
    "explanation": "None of the options (Token bucket, Sampling, System call) are CPU scheduling algorithms. (Standard ones are RR, SJF, FCFS)."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = osQuestions2024;
}
