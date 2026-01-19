// Computer Graphics 2024 Question Bank
const cgQuestions2024 = [
    {
        question: "A good example of hypermedia file is:",
        options: ["The internet", "Level 1 video disc", "Audiotape", "Videotape"],
        correct: 0,
        explanation: "The Internet (specifically the World Wide Web) is the most prominent example of hypermedia, linking text, graphics, audio, and video via hyperlinks."
    },
    {
        question: "A multimedia file:",
        options: ["is same as any other regular file", "must be accessed at specific rate", "stored on remote server can't be delivered to its client", "none of the above"],
        correct: 1,
        explanation: "Multimedia files, particularly continuous media like audio and video, are isochronous, meaning they must be processed and played back at a specific, constant rate to be meaningful."
    },
    {
        question: "Which one of the following is the property of multimedia system?",
        options: ["High storage", "High data rates", "both (A) and (B)", "none of the above"],
        correct: 2,
        explanation: "Multimedia systems require significant storage capacity for media files and high bandwidth (data rates) for transmission."
    },
    {
        question: "Video file format is:",
        options: ["Tiff", "AVI", "WAV", "Both (A) and (B)"],
        correct: 1,
        explanation: "AVI (Audio Video Interleave) is a video container format. TIFF is for images, and WAV is for audio."
    },
    {
        question: "Interactive computer graphics uses various kind of input devices such as:",
        options: ["Mouse", "Graphic tablet", "Joystick", "All of the above"],
        correct: 3,
        explanation: "Mice, tablets, and joysticks are all standard input devices used to interact with graphics systems."
    },
    {
        question: "Input functions are used for:",
        options: ["Control the data flow from these interactive devices", "Process the data flow from these interactive devices", "Both (A) and (B)", "None of the above"],
        correct: 2,
        explanation: "Input functions manage the reading, controlling, and processing of data signals coming from hardware devices."
    },
    {
        question: "A graphics package contains:",
        options: ["number of housekeeping task such as cleaning a display screen", "number of housekeeping task such as initializing parameters", "both (A) and (B)", "none of the above"],
        correct: 2,
        explanation: "Graphics libraries (packages) handle low-level tasks like initialization and clearing the frame buffer."
    },
    {
        question: "The interactive computer graphics involves _____ way communication between computer and the user.",
        options: ["one", "two", "three", "four"],
        correct: 1,
        explanation: "Interactive implies a dialogue: the user provides input, and the computer provides visual output, creating a two-way loop."
    },
    {
        question: "In Bresenham's, if the distance d1 < d2 then decision parameter Pk is:",
        options: ["Positive", "Equal", "Negative", "Both (A) and (C)"],
        correct: 2,
        explanation: "In Bresenham's algorithm, d1 is the distance to the lower pixel and d2 to the upper. If d1 < d2, the lower pixel is closer. The decision parameter Pk is usually derived such that a negative value indicates choosing the lower pixel."
    },
    {
        question: "The mapping a world window in world coordinates system to viewport are called:",
        options: ["Transformation viewing", "Viewport", "Clipping window", "Screen coordinate system"],
        correct: 0,
        explanation: "This process is known as the Window-to-Viewport transformation or Viewing Transformation."
    },
    {
        question: "Coordinates of window are known as:",
        options: ["Screen coordinates", "World coordinates", "Device coordinates", "Cartesian coordinates"],
        correct: 1,
        explanation: "The window defines the area of interest in the logical World coordinate space."
    },
    {
        question: "Coordinates of viewport are known as:",
        options: ["World coordinates", "Polar coordinates", "Screen coordinates", "Cartesian coordinates"],
        correct: 2,
        explanation: "The viewport is the area on the physical display device where the image is drawn, using screen/device coordinates."
    },
    {
        question: "The region against which an object is to clipped is called as:",
        options: ["Clipping", "Clipping region", "Clip window", "None of the above"],
        correct: 2,
        explanation: "The specific rectangular boundary used for clipping is technically called the clipping window."
    },
    {
        question: "If extended line proceeds from the outside to the inside of the corresponding boundary line it is denoted as:",
        options: ["p > 0", "p = 0", "p < 0", "None of the above"],
        correct: 2,
        explanation: "In the Liang-Barsky algorithm, a negative p value indicates the line is entering the clip window (outside to inside)."
    },
    {
        question: "If extended line proceeds from inside to the outside of the corresponding boundary line it is denoted as:",
        options: ["p < 0", "p > 0", "p = 0", "None of the above"],
        correct: 1,
        explanation: "Conversely, a positive value indicates the line is exiting the window (inside to outside)."
    },
    {
        question: "The second grid in DVST is called as:",
        options: ["Phosphor", "Storage grid", "Collector", "None of the above"],
        correct: 1,
        explanation: "The Direct View Storage Tube (DVST) uses a storage mesh (grid) behind the phosphor screen to hold the image charge."
    },
    {
        question: "The process of digitizing a given picture definition into a set of pixel intensity for storage in the frame buffer is called:",
        options: ["Rasterization", "Encoding", "Scan conversion", "True color system"],
        correct: 2,
        explanation: "Scan conversion (or rasterization) is the process of converting vector data into pixel data."
    },
    {
        question: "Aspect ratio means:",
        options: ["Number of pixels", "Ratio of vertical points to horizontal points", "Ratio of horizontal points to vertical points", "Both (B) and (C)"],
        correct: 2,
        explanation: "Aspect Ratio is standardly defined as Width:Height (Horizontal points to Vertical points)."
    },
    {
        question: "The number of pixels stored in the frame buffer of a graphics system is known as:",
        options: ["Resolution", "Depth", "Resolution", "Only (A)"],
        correct: 0,
        explanation: "Resolution refers to the dimensions of the pixel grid (e.g., 1920x1080)."
    },
    {
        question: "The quality of picture obtained from a device depends on:",
        options: ["Dot size", "Number of dots per inch", "Number of lines per inch", "All of the above"],
        correct: 3,
        explanation: "All these factors (resolution, dot pitch) contribute to image sharpness and quality."
    },
    {
        question: "Part of display processor is:",
        options: ["Display file memory", "Display generator", "Display console", "All of the above"],
        correct: 3,
        explanation: "A display processor system includes memory for instructions, a generator to create the video, and the interface."
    },
    {
        question: "_____ is not a common bitmap based file type extension.",
        options: ["ODT", "TIFF", "PNG", "PCX"],
        correct: 0,
        explanation: "ODT is a text document format (OpenDocument Text). The others are image formats."
    },
    {
        question: "DTP means:",
        options: ["Drawing text picture", "Desktop publishing", "Dask town publishing", "None of the above"],
        correct: 1,
        explanation: "Standard acronym for Desktop Publishing."
    },
    {
        question: "PCBs can be drawn using the computer graphics:",
        options: ["In very efficient way", "In a shorter time", "In larger time", "Both (A) and (B)"],
        correct: 3,
        explanation: "CAD software makes PCB design faster and more efficient."
    },
    {
        question: "Scaling of a polygon is done by computing:",
        options: ["The product of (x, y) of each vertex", "(x, y) of end points", "Center coordinates", "Only (A)"],
        correct: 0,
        explanation: "To scale a polygon, you multiply the coordinates of every vertex by the scaling factors."
    },
    {
        question: "If the scaling factor values Sx and Sy < 1 then:",
        options: ["It reduces the size", "It increases the size", "It stunts the size", "None of the above"],
        correct: 0,
        explanation: "Factors less than 1 shrink the object; factors greater than 1 enlarge it."
    },
    {
        question: "What is the use of homogeneous coordinates and matrix representation?",
        options: ["To treat all 3 transformations in a consistent way", "To scale", "To rotating", "To shear the object"],
        correct: 0,
        explanation: "Homogeneous coordinates allow translation (which is addition) to be represented as matrix multiplication, unifying it with rotation and scaling."
    },
    {
        question: "The general homogeneous coordinates representations can also be written as:",
        options: ["(h.x, h.y, h.z)", "(h.x, h.y, h)", "(x, y, h.z)", "(h, x, y)"],
        correct: 1,
        explanation: "A 2D point is represented as (h.x, h.y, h) where x' = h.x/h and y' = h.y/h."
    },
    {
        question: "The process of removal of hidden surfaces is termed as:",
        options: ["Clipping", "Copying", "Culling", "Shorting"],
        correct: 2,
        explanation: "Culling (specifically Back-face culling) is the removal of surfaces facing away from the viewer."
    },
    {
        question: "Which of the following can be first used to test for overlap of a curve with the clipping window?",
        options: ["Edges of the curve", "The centre of the curve", "The boundary rectangle for the curve", "Tangents to the curve"],
        correct: 2,
        explanation: "Checking the Bounding Box (boundary rectangle) is a fast trivial rejection step before doing complex curve intersection calculations."
    },
    {
        question: "The B spline curve has a:",
        options: ["First order continuity", "Second order continuity", "Zero order continuity", "None of the above"],
        correct: 1,
        explanation: "Cubic B-splines ensure second-order continuity at knot points, meaning the curvature is continuous."
    },
    {
        question: "The Bezier curve is smoother than the hermite cubic spline because it has _____ order derivatives.",
        options: ["lower", "higher", "lower and higher both", "None of the above"],
        correct: 1,
        explanation: "Bezier curves (especially of higher degrees) are often described as having higher-order smoothness capabilities compared to the standard cubic Hermite."
    },
    {
        question: "The major contents of multimedia services:",
        options: ["Multimedia hardware", "Operating system", "Multimedia software", "None of the above"],
        correct: 2,
        explanation: "The content or service provided is the software and media itself, not the hardware running it."
    },
    {
        question: "The multimedia disadvantage is:",
        options: ["Lost of cyberspace", "Individualized", "Engrossing deep involvement", "None of the above"],
        correct: 0,
        explanation: "Lost in cyberspace (disorientation) is a common cognitive disadvantage of complex hypermedia systems."
    },
    {
        question: "The example of multimedia capture device:",
        options: ["Camera", "Microphone", "Audio recorder", "All of the above"],
        correct: 3,
        explanation: "All listed devices capture analog media for digital conversion."
    },
    {
        question: "The application in entertainment are:",
        options: ["Satellite", "Televisions", "Internet", "All of the above"],
        correct: 3,
        explanation: "These are all mediums for delivering entertainment multimedia."
    },
    {
        question: "The combination of text, graphics art, sound, animation and video delivered by computer or other electronic devices are called:",
        options: ["Multimedia", "Hyper media", "Visual media", "None of the above"],
        correct: 0,
        explanation: "The standard definition of multimedia."
    },
    {
        question: "The people when weave multimedia into meaningful tapestries are called:",
        options: ["Programmers", "Multimedia developers", "Software engineers", "Multimedia engineers"],
        correct: 1,
        explanation: "A specific definition used in multimedia textbooks to describe the creative integrators."
    },
    {
        question: "One of the disadvantages of multimedia:",
        options: ["Cost", "Adaptability", "Usability", "Relativity"],
        correct: 0,
        explanation: "Producing high-quality multimedia is expensive (time and resources)."
    },
    {
        question: "To receive signal, a translator is needed to decode signal and encode it again at a:",
        options: ["High quality", "Lower quality", "Same quality", "Bad quality"],
        correct: 2,
        explanation: "Signal repeaters/translators aim to preserve signal quality."
    },
    {
        question: "How many step process for creating a 3D animation are required?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "Typically 3 main phases: Modeling, Animation, Rendering."
    },
    {
        question: "In the Bezier curve, the curve is always _____ to first and last segments of the polygon.",
        options: ["normal", "parallel", "tangent", "all of the above"],
        correct: 2,
        explanation: "The curve starts tangent to the line P0-P1 and ends tangent to the line P(n-1)-Pn."
    },
    {
        question: "_____ curves allows local control of the curve.",
        options: ["Analytical", "Hermite cubic spline", "Bezier", "B-spline"],
        correct: 3,
        explanation: "Changing a control point in a B-spline only affects a small section of the curve (local control), whereas in Bezier, it affects the whole curve."
    },
    {
        question: "In Bezier curve, the curve follows:",
        options: ["The control points", "The shape of the defining polygon", "The defining points", "All of the above"],
        correct: 1,
        explanation: "This is the Convex Hull property; the curve stays within the polygon defined by the points."
    },
    {
        question: "In Bezier curve, _____ of polygon actually lie on the curve.",
        options: ["Only the first control points", "Only the last control points", "Only the first and last control points", "All the control points"],
        correct: 2,
        explanation: "The curve interpolates (passes through) only the start and end points."
    },
    {
        question: "The number of control points can be added or subtracted:",
        options: ["In Bezier curve", "In B-spline curve", "In cubic spline curve", "All of the above"],
        correct: 1,
        explanation: "B-splines allow adding points (knots) to increase flexibility without changing the degree, unlike Bezier."
    },
    {
        question: "The degree of the curve is independent of the number of control points in:",
        options: ["Hermite cubic spline curve", "Bezier curve", "B-spline curve", "Hyperbola"],
        correct: 2,
        explanation: "In B-splines, you can define the degree (e.g., cubic) regardless of how many control points you have."
    },
    {
        question: "The type of spline curve is:",
        options: ["Open spline", "Closed spline", "Both (A) and (B)", "None of the above"],
        correct: 2,
        explanation: "Splines can be open or closed (loops)."
    },
    {
        question: "Cubic spline are:",
        options: ["Simple to corporate", "Provides continuity to curves", "Both (A) and (B)", "None of the above"],
        correct: 1,
        explanation: "Cubic splines are primarily used because they provide continuity."
    },
    {
        question: "A spline can be defined as:",
        options: ["Curved strip", "A smooth curve is drawn using a pencil", "A flexible strip used to generate a smooth curve through a designated set of points", "All of the above"],
        correct: 2,
        explanation: "This is the definition derived from the physical drafting tool called a spline."
    },
    {
        question: "Which files creates a perfect reproduction of the original images?",
        options: ["Shockwave", "Nx view", "GIF", "JPG"],
        correct: 2,
        explanation: "GIF uses lossless LZW compression (for indexed colors), unlike JPG which is lossy."
    },
    {
        question: "The image can be transmitted to the display point by:",
        options: ["Line", "Points", "Segments", "All of the above"],
        correct: 3,
        explanation: "Graphics can be drawn using points, lines, or segments."
    },
    {
        question: "A basic interactive picture construction techniques are:",
        options: ["Positioning and pointing constraints", "Grid, gravity field, rubber band method", "Sketching, dragging, inking and pointing", "All of the above"],
        correct: 3,
        explanation: "All listed are standard interaction techniques in graphics software."
    },
    {
        question: "The movement of different attributes of image would make the image dynamic and such a dynamic effect is termed as:",
        options: ["Pictures", "Animation", "Pointing", "All of the above"],
        correct: 1,
        explanation: "Dynamic movement of attributes (position, shape, color) over time is animation."
    },
    {
        question: "On raster system, lines are plotted with:",
        options: ["Lines", "Dots", "Pixels", "All of the above"],
        correct: 2,
        explanation: "Raster systems are grid-based; everything is made of pixels."
    },
    {
        question: "Which algorithm is faster method for calculating pixel position?",
        options: ["Bresenham's line algorithm", "Parallel line algorithm", "Midpoint algorithm", "DDA line algorithm"],
        correct: 0,
        explanation: "Bresenham's uses integer arithmetic (addition/subtraction), making it faster than floating-point algorithms like DDA."
    },
    {
        question: "The disadvantage of line DDA is:",
        options: ["Time consuming", "Faster", "Either (A) or (B)", "None of the above"],
        correct: 0,
        explanation: "The floating-point calculations and rounding make it slower (time consuming)."
    },
    {
        question: "An accurate and efficient raster line generating algorithm is:",
        options: ["DDA algorithm", "Mid point algorithm", "Parallel line algorithm", "Bresenham's line algorithm"],
        correct: 3,
        explanation: "Bresenham's is the standard for efficiency and accuracy."
    },
    {
        question: "Positive values for the rotation angle defines:",
        options: ["Counter clockwise rotations about the endpoints", "Counter clockwise translations about the pivot points", "Counter clockwise rotations about the pivot points", "Clockwise rotations about the pivot points"],
        correct: 2,
        explanation: "In standard Cartesian systems, positive angles rotate Counter-Clockwise (CCW)."
    },
    {
        question: "A transformation that slants the shape of objects:",
        options: ["rotation", "shear", "reflection", "translation"],
        correct: 1,
        explanation: "Shear distorts the shape as if layers are sliding, creating a slant."
    },
    {
        question: "For reducing the size of the object we set both scale factor:",
        options: ["Less than 0", "Greater than 1", "Equals to 1", "In between 0 and 1"],
        correct: 3,
        explanation: "Values between 0 and 1 reduce the size (e.g., 0.5 is half size)."
    },
    {
        question: "The representations for surface modeling include:",
        options: ["Polygon mesh", "Parametric surfaces", "Quadratic surfaces", "All of the above"],
        correct: 3,
        explanation: "All are valid mathematical representations for 3D surfaces."
    },
    {
        question: "If two curve segments join together the curve has:",
        options: ["G1 continuity", "G0 continuity", "G2 continuity", "G3 continuity"],
        correct: 1,
        explanation: "If endpoints just meet (join), it is G0 (Geometric continuity 0). G1 requires tangents to align."
    },
    {
        question: "Spline curve can be either:",
        options: ["Bezier curve", "B-spline", "Both (A) and (B)", "None of the above"],
        correct: 2,
        explanation: "Both are types of splines."
    },
    {
        question: "Which of the following is not a synthetic entity?",
        options: ["Hyperbola", "Bezier curve", "B-spline curve", "Cubic curve"],
        correct: 0,
        explanation: "Hyperbola is an analytic geometric shape (conic section), not a synthetic (free-form) curve."
    },
    {
        question: "When the curve passes through all the data points, then the curve is known as:",
        options: ["Approximation curve", "Pitch curve", "Data curve", "Interpolant curve"],
        correct: 3,
        explanation: "Interpolation means fitting the curve exactly through the points."
    },
    {
        question: "A display controller serves to pass the contents of:",
        options: ["Frame buffer to monitor", "Monitor to frame buffer", "Both (A) and (B)", "None of the above"],
        correct: 0,
        explanation: "It reads the frame buffer and sends the signal to the monitor."
    },
    {
        question: "The image is passed repeatedly to the monitor in order to maintain a steady picture on the screen:",
        options: ["25 times a second", "30 times a second", "30 or more times a second", "None of the above"],
        correct: 2,
        explanation: "Refresh rates must be high (typically 30Hz or 60Hz) to prevent flicker."
    },
    {
        question: "The display controller converts 0s or 1s into:",
        options: ["TV monitors", "Video signal", "Electrical signal", "None of the above"],
        correct: 1,
        explanation: "It converts the digital bits into a video signal (analog or digital) for the display."
    },
    {
        question: "Reflection of a point about x-axis, followed by a counter clockwise rotation of 90 degree, is equivalent to reflection about the line:",
        options: ["y = x", "y = -x", "y = x", "x = 0"],
        correct: 1,
        explanation: "Reflection X followed by Rotation 90° maps (x,y) to (y,-x), which is reflection about y = -x."
    },
    {
        question: "How many homogeneous representation are possible for one point (x, y)?",
        options: ["1", "0", "2", "Infinite"],
        correct: 3,
        explanation: "(x,y,1) is the same as (kx,ky,k) for any non-zero k."
    },
    {
        question: "A 2D rotation is applied to an object by:",
        options: ["Repositioning it along with the straight line path", "Repositioning it along with circular path", "Only (B)", "None of the above"],
        correct: 1,
        explanation: "Rotation moves points in a circle around the pivot."
    },
    {
        question: "An ellipse can also be rotated about its center coordinates by rotating:",
        options: ["End points", "Major and minor axes", "Only (A)", "None of the above"],
        correct: 1,
        explanation: "The orientation of an ellipse is defined by its axes; rotating them rotates the ellipse."
    },
    {
        question: "The 2D scaling equation in the matrix form is:",
        options: ["[x' y'] = [x y] [sx 0; 0 sy]", "[x' y'] = [sx 0; 0 sy] [x y]", "[x' y'] = [x y] + [sx sy]", "None of these"],
        correct: 1,
        explanation: "Scaling is a matrix multiplication: New Point = Scale Matrix * Old Point."
    },
    {
        question: "Interactive computer graphics enables a user to customize the graphics is:",
        options: ["computer way", "his own way", "both (A) and (B)", "none of the above"],
        correct: 1,
        explanation: "It allows the user to control the output (his own way)."
    },
    {
        question: "User can make any change on image with the use of:",
        options: ["non interactive graphics", "interactive graphics", "both (A) and (B)", "none of the above"],
        correct: 1,
        explanation: "Interaction is required to make dynamic changes."
    },
    {
        question: "The application area of computer graphics are:",
        options: ["political", "education and textbook", "CAD and entertainment", "All of the above"],
        correct: 3,
        explanation: "Graphics are used in all fields (even political charts). CAD and Entertainment are the biggest technical users."
    },
    {
        question: "How many components of interactive computer graphics are?",
        options: ["One", "Two", "Three", "Four"],
        correct: 3,
        explanation: "Generally: Input, Processing, Storage, Output."
    },
    {
        question: "What are the components of interactive computer graphics?",
        options: ["A digital memory or frame buffer", "A television monitor", "An interface or display controller", "All of the above"],
        correct: 3,
        explanation: "All listed are hardware components."
    },
    {
        question: "CAD means:",
        options: ["Car aided design", "Computer art design", "Computer aided design", "none of the above"],
        correct: 2,
        explanation: "Standard acronym."
    },
    {
        question: "Translation factor (tx, ty) is called as:",
        options: ["translation vector", "shift vector", "both (A) and (B)", "none of the above"],
        correct: 2,
        explanation: "It is referred to by both names."
    },
    {
        question: "To change the position of circle or ellipse, we translate",
        options: ["center coordinates", "center coordinates and redraws the figure in the new location", "outline coordinates", "All of the above"],
        correct: 1,
        explanation: "You move the center point and regenerate the shape at the new location."
    },
    {
        question: "The term 'transform' means:",
        options: ["Change", "Increase", "No change", "All of the above"],
        correct: 0,
        explanation: "To transform means to change form, position, or size."
    },
    {
        question: "Scaling transformation is said to be homogeneous:",
        options: ["sx ≠ sy", "sx > sy", "sx = sy", "None of the above"],
        correct: 2,
        explanation: "Homogeneous (uniform) scaling uses the same factor for X and Y."
    },
    {
        question: "The direction of a positive angle of rotation is chosen in accordance to the:",
        options: ["Right hand rule", "Left hand rule", "Origin", "None of the above"],
        correct: 0,
        explanation: "The Right Hand Rule dictates that with the thumb pointing out (Z-axis), fingers curl CCW (positive rotation)."
    },
    {
        question: "The basic geometric transformations are:",
        options: ["rotation", "reflection", "shear", "all of the above"],
        correct: 3,
        explanation: "These are all affine transformations."
    },
    {
        question: "In 2D translation, a point (x, y) can move to the new position by using the equation:",
        options: ["x' = x + tx, y' = y + ty", "x' = x - tx, y' = y - ty", "x' = x * tx, y' = y * ty", "none of the above"],
        correct: 0,
        explanation: "Standard translation addition."
    },
    {
        question: "What are the criteria for good line drawing?",
        options: ["Line should be drawn rapidly", "Line should be appearing straight & terminated accurately", "Line should have constant density", "All of the above"],
        correct: 3,
        explanation: "Speed, accuracy/linearity, and aesthetics (density) are the goals of line algorithms."
    },
    {
        question: "Which of the following is not a graphical software?",
        options: ["CorelDraw", "MAYA", "Flash", "None of the above"],
        correct: 3,
        explanation: "All options (CorelDraw, Maya, Flash) are graphical software."
    },
    {
        question: "GIS stands for:",
        options: ["Geographical information system", "Graphical information system", "Graphical interaction system", "None of the above"],
        correct: 0,
        explanation: "Standard acronym."
    },
    {
        question: "The devices which converts the electrical energy into light is called:",
        options: ["Liquid crystal displays", "Non-emitters", "Plasma panels", "Emitters"],
        correct: 3,
        explanation: "Emissive displays (CRT, Plasma, LED) generate light. LCDs are non-emitters."
    },
    {
        question: "An _____ can be considered as an extension of spherical surface.",
        options: ["Bezier", "Ellipsoid", "Shearing", "All of the above"],
        correct: 1,
        explanation: "An ellipsoid is a sphere stretched along its axes."
    },
    {
        question: "By which more complex objects can be constructed?",
        options: ["Quadratic surfaces", "Bezier curve", "Composite transformation", "None of the above"],
        correct: 1,
        explanation: "Bezier curves and surfaces are used to model complex freeform shapes."
    },
    {
        question: "The Bezier curve obtained from the four control points called:",
        options: ["Square Bezier curve", "Cubic Bezier curve", "Hectare Bezier curve", "Rectangle Bezier curve"],
        correct: 1,
        explanation: "4 control points define a degree-3 (cubic) curve."
    },
    {
        question: "The text colour in presentation should contrast with the color of:",
        options: ["CPU", "Frame", "Stack", "Background"],
        correct: 3,
        explanation: "Visual design principle for readability."
    },
    {
        question: "Which of the following is a technique to blend two or more images to form a new image?",
        options: ["Modeling", "Morphing", "Animating", "Warping"],
        correct: 1,
        explanation: "Morphing involves blending (cross-dissolving) and warping images."
    },
    {
        question: "How many attributes control the characteristics of sound?",
        options: ["5", "4", "3", "2"],
        correct: 1,
        explanation: "Frequency, Amplitude, Waveform (Timbre), Duration."
    },
    {
        question: "Moving picture experts group (MPEG) is used to compress:",
        options: ["Frames", "Images", "Audio", "Video"],
        correct: 3,
        explanation: "MPEG is the standard for video compression."
    },
    {
        question: "MMS stands for:",
        options: ["Multimedia System", "Multimedia Messaging System", "Multimedia Messaging Services", "Multimedia Services"],
        correct: 2,
        explanation: "Multimedia Messaging Service."
    },
    {
        question: "JPEG stands for:",
        options: ["Joint Photo Experts Group", "Joint Photographic Experts Group", "Joint Processor Experts Group", "Joint Photographic Expression Group"],
        correct: 1,
        explanation: "Standard acronym."
    }
];