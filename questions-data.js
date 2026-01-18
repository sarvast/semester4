
// Computer Graphics MCQ Questions Database - All 100 Questions from 2022 July Paper
const questionBank = {
    'computer-graphics': [
        {
            question: "For reducing the size of the object we set both scale factors:",
            options: ["Less than 0", "Greater than 1", "Equals to 1", "In between 0 & 1"],
            correct: 3,
            explanation: "In scaling transformations, a factor greater than 1 enlarges the object, while a factor between 0 and 1 reduces its size."
        },
        {
            question: "A transformation that slants the shape of objects:",
            options: ["Rotation", "Shear", "Reflection", "Translation"],
            correct: 1,
            explanation: "Shearing is the transformation that distorts the shape of an object such that the transformed shape appears as if the object were composed of internal layers that had been slid over each other."
        },
        {
            question: "Positive values for the rotation angle define:",
            options: ["Counter clockwise rotations about the endpoints", "Counter clockwise translations about the pivot points", "Counter clockwise rotations about the pivot points", "Clockwise rotations about the pivot points"],
            correct: 2,
            explanation: "In standard Cartesian coordinate systems used in graphics, a positive angle indicates a counter-clockwise rotation around the pivot point."
        },
        {
            question: "To change the position of circle or ellipse we translate:",
            options: ["Center coordinates", "Center coordinates and redraws the figure in the new location", "Outline coordinates", "All of these"],
            correct: 1,
            explanation: "To translate a circle or ellipse, we modify its center coordinates and then redraw the shape at the new position."
        },
        {
            question: "Translation factor (tx, ty) is called as:",
            options: ["Translation vector", "Shift vector", "Both (A) & (B)", "None of these"],
            correct: 2,
            explanation: "The offsets tx and ty are collectively referred to as the translation vector or shift vector."
        },
        {
            question: "In 2D translation, a point can move to the new position by using the equation:",
            options: ["x' = x + tx, y' = y + ty", "x' = x - tx, y' = y - ty", "x' = x * tx, y' = y * ty", "None of the above"],
            correct: 0,
            explanation: "This is the standard algebraic formula for 2D translation."
        },
        {
            question: "The basic geometric transformations are:",
            options: ["Rotation", "Reflection", "Shear", "All of these"],
            correct: 3,
            explanation: "Translation, rotation, scaling, reflection, and shear are all considered fundamental geometric transformations in computer graphics."
        },
        {
            question: "The direction of a positive angle of rotation is chosen in accordance to the:",
            options: ["Right hand rule", "Left hand rule", "Origin", "None of them"],
            correct: 0,
            explanation: "In a right-handed coordinate system, if you point your right thumb along the positive axis of rotation, your fingers curl in the direction of positive rotation."
        },
        {
            question: "Scaling transformation is said to be homogeneous (uniform) when:",
            options: ["sx ≠ sy", "sx > sy", "sx = sy", "None of them"],
            correct: 2,
            explanation: "Uniform scaling occurs when the scaling factor is the same in all directions (sx = sy)."
        },
        {
            question: "The term 'transform' means:",
            options: ["Change", "Increase", "No change", "All of these"],
            correct: 0,
            explanation: "In graphics, to transform means to change the object's geometry (position, orientation, or size)."
        },
        {
            question: "The second grid in DVST (Direct View Storage Tube) is called as:",
            options: ["Phosphor", "Storage grid", "Collector", "None"],
            correct: 1,
            explanation: "DVSTs use a primary gun to write the image and a flood gun to maintain it. The storage grid stores the picture information as a charge distribution behind the phosphor screen."
        },
        {
            question: "If extended line proceeds from inside to the outside of the corresponding boundary line it is denoted as:",
            options: ["p < 0", "p > 0", "p = 0", "None of them"],
            correct: 1,
            explanation: "In the Liang-Barsky clipping algorithm, if p > 0, the line is proceeding from the inside to the outside of the boundary."
        },
        {
            question: "If extended line proceeds from the outside to the inside of the corresponding boundary line it is denoted:",
            options: ["p > 0", "p = 0", "p < 0", "None of them"],
            correct: 2,
            explanation: "Conversely, if p < 0, the line is proceeding from the outside to the inside of the clip boundary."
        },
        {
            question: "The region against which an object is to clipped is called as:",
            options: ["Clipping", "Clipping region", "Clip window", "None of them"],
            correct: 2,
            explanation: "The specific rectangular area used to select which parts of the scene are visible is called the clip window."
        },
        {
            question: "Coordinates of viewport are known as:",
            options: ["World coordinates", "Polar coordinates", "Screen coordinates", "Cartesian coordinates"],
            correct: 2,
            explanation: "The viewport represents the area on the display device where the image is drawn, so it uses screen coordinates."
        },
        {
            question: "Coordinates of window are known as:",
            options: ["Screen coordinates", "World coordinates", "Device coordinates", "Cartesian coordinates"],
            correct: 1,
            explanation: "The window defines the area of the scene in the user's defined world coordinate system that is to be viewed."
        },
        {
            question: "The mapping a world window in world coordinates system to viewport are called:",
            options: ["Transformation viewing", "Viewport", "Clipping window", "Screen coordinate system"],
            correct: 0,
            explanation: "This process is known as the Window-to-Viewport transformation or Viewing Transformation."
        },
        {
            question: "In Bresenham's, if the distance then decision parameter is:",
            options: ["Positive", "Equal", "Negative", "Both (A) & (B)"],
            correct: 2,
            explanation: "In Bresenham's line algorithm, the decision parameter is derived such that negative values indicate the lower pixel is chosen."
        },
        {
            question: "An accurate and efficient raster line generating algorithm is:",
            options: ["DDA algorithm", "Mid point algorithm", "Parallel line algorithm", "Bresenham's line algorithm"],
            correct: 3,
            explanation: "Bresenham's algorithm uses only integer addition and subtraction, making it faster and more accurate than DDA."
        },
        {
            question: "The disadvantage of line DDA is:",
            options: ["Time consuming", "Faster", "Neither (A) & (B)", "None of the above"],
            correct: 0,
            explanation: "DDA requires floating-point arithmetic and rounding operations for every step, which is computationally more expensive."
        },
        {
            question: "Which algorithm is faster method for calculating pixel position?",
            options: ["Bresenham's line algorithm", "Parallel line algorithm", "Midpoint algorithm", "DDA line algorithm"],
            correct: 0,
            explanation: "Due to the use of pure integer arithmetic."
        },
        {
            question: "On raster system, lines are plotted with:",
            options: ["Lines", "Dots", "Pixels", "All of these"],
            correct: 2,
            explanation: "A raster display is a grid of discrete points called pixels."
        },
        {
            question: "The movement of different attributes of image would make the image dynamic and such a dynamic effect is termed as:",
            options: ["Pictures", "Animation", "Pointing", "All of these"],
            correct: 1,
            explanation: "Animation is defined as the simulation of movement created by displaying a series of pictures rapidly."
        },
        {
            question: "A basic interactive picture construction techniques are:",
            options: ["Positioning and pointing constraints", "Grid, gravity field, rubber band method", "Sketching, dragging, inking and pointing", "All of these"],
            correct: 3,
            explanation: "All listed options are valid interaction techniques for constructing graphics."
        },
        {
            question: "The image can be transmitted to the display point by:",
            options: ["Line", "Points", "Segments", "All of these"],
            correct: 3,
            explanation: "Images can be drawn using points (raster), lines/segments (vector), or a combination."
        },
        {
            question: "The display controller converts 0s or 1s into:",
            options: ["TV monitors", "Video signal", "Electrical signal", "None of these"],
            correct: 1,
            explanation: "The controller reads the digital frame buffer and converts it into a video signal for the monitor."
        },
        {
            question: "The image is passed repeatedly to the monitor in order to maintain a steady picture on the screen:",
            options: ["25 times a second", "30 times a second", "30 or more times a second", "None of these"],
            correct: 2,
            explanation: "To avoid flicker, refresh rates are typically 60Hz or at least above 30Hz."
        },
        {
            question: "A display controller serves to pass the contents of:",
            options: ["Frame buffer to monitor", "Monitor to frame buffer", "Both (A) & (B)", "None of these"],
            correct: 0,
            explanation: "Its primary job is reading memory and sending it to the display."
        },
        {
            question: "PCBs can be drawn using the computer graphics:",
            options: ["In very efficient way", "In a shorter time", "In larger time", "Both (A) & (B)"],
            correct: 3,
            explanation: "CAD tools for PCB design improve both efficiency and speed."
        },
        {
            question: "DTP means:",
            options: ["Drawing text picture", "Desktop publishing", "Dask town publishing", "None of these"],
            correct: 1,
            explanation: "DTP stands for Desktop Publishing."
        },
        {
            question: "_____ is not a common bitmap based file type extension:",
            options: ["ODT", "TIFF", "PNG", "PCX"],
            correct: 0,
            explanation: "ODT is an OpenDocument Text format, not an image bitmap format like TIFF, PNG, or PCX."
        },
        {
            question: "Part of display processor:",
            options: ["Display file memory", "Display generator", "Display console", "All of these"],
            correct: 3,
            explanation: "A display processor encompasses the memory, the character/vector generator, and the interface to the console."
        },
        {
            question: "The quality of picture obtained from a device depends on:",
            options: ["Dot size", "Number of dots per inch", "Number of lines per inch", "All of these"],
            correct: 3,
            explanation: "Resolution (DPI/LPI) and dot pitch define image sharpness."
        },
        {
            question: "The number of pixels stored in the frame buffer of a graphics system is known as:",
            options: ["Resolution", "Depth", "Resolution", "Only (A)"],
            correct: 0,
            explanation: "Resolution defines the dimensions of the pixel grid."
        },
        {
            question: "Aspect ratio means:",
            options: ["Number of pixels", "Ratio of vertical points to horizontal points", "Ratio of horizontal points to vertical points", "Both (B) & (C)"],
            correct: 2,
            explanation: "Aspect ratio is defined as Width:Height (Horizontal:Vertical)."
        },
        {
            question: "The process of digitizing a given picture definition into a set of pixel intensity for storage in the frame buffer is called:",
            options: ["Rasterization", "Encoding", "Scan conversion", "True color system"],
            correct: 2,
            explanation: "Scan conversion is the process of converting vector data into raster data (pixels)."
        },
        {
            question: "The devices which converts the electrical energy into light is called:",
            options: ["Liquid crystal displays", "Non emitters", "Plasma panels", "Emitters"],
            correct: 3,
            explanation: "Emissive displays generate their own light. LCDs are non-emissive."
        },
        {
            question: "GIS stands for:",
            options: ["Geographical information system", "Graphical information system", "Graphical interaction system", "None of these"],
            correct: 0,
            explanation: "GIS stands for Geographical Information System."
        },
        {
            question: "Which of the following is not a graphical software?",
            options: ["Corel draw", "MAYA", "Flash", "None of these"],
            correct: 3,
            explanation: "Corel Draw, Maya, and Flash are all graphical software."
        },
        {
            question: "What are the criteria for good line drawing?",
            options: ["Line should be drawn rapidly", "Line should be appearing straight & terminated accurately", "Line should have constant density", "All of these"],
            correct: 3,
            explanation: "These are the three standard requirements for line algorithms: speed, linearity/accuracy, and uniform brightness."
        },
        {
            question: "CAD means:",
            options: ["Car aided design", "Computer art design", "Computer aided design", "None of these"],
            correct: 2,
            explanation: "CAD stands for Computer Aided Design."
        },
        {
            question: "What are the components of interactive computer graphics?",
            options: ["A digital memory or frame buffer", "A television monitor", "An interface or display controller", "All of these"],
            correct: 3,
            explanation: "The hardware system requires memory, a display, and a controller."
        },
        {
            question: "How many components of interactive computer graphics are:",
            options: ["One", "Two", "Three", "Four"],
            correct: 3,
            explanation: "Typically categorized as: 1. Input Devices, 2. Processor, 3. Memory, 4. Display/Output."
        },
        {
            question: "The application area of computer graphics are:",
            options: ["Political", "Education and textbook", "CAD and entertainment", "All of these"],
            correct: 3,
            explanation: "Graphics are used in all these fields."
        },
        {
            question: "User can make any change on image with the use of:",
            options: ["Non interactive graphics", "Interactive graphics", "Both (A) & (B)", "None of these"],
            correct: 1,
            explanation: "Interactivity defines the ability of the user to modify the image dynamically."
        },
        {
            question: "Interactive computer graphics enables a user to customize the graphics in:",
            options: ["Computer way", "His own way", "Both (A) & (B)", "None of the above"],
            correct: 1,
            explanation: "It allows the user to control the output according to their needs."
        },
        {
            question: "The interactive computer graphics involves _____ between computer and the user:",
            options: ["One way communication", "Two way communication", "Three", "Four"],
            correct: 1,
            explanation: "Interaction implies a dialogue: User inputs → Computer outputs."
        },
        {
            question: "A graphics package contains:",
            options: ["No. of housekeeping task such as cleaning a display screen", "No. of housekeeping task such as initializing parameters", "Both (A) & (B)", "None of the above"],
            correct: 2,
            explanation: "Graphics libraries handle initialization and clearing buffers."
        },
        {
            question: "Input functions are used for:",
            options: ["Control the data flow from these interactive devices", "Process the data flow from these interactive devices", "Both (A) & (B)", "None of these"],
            correct: 2,
            explanation: "Input functions manage the reading and processing of data from devices."
        },
        {
            question: "Interactive computer graphics uses various kinds of input devices such as:",
            options: ["Mouse", "Graphic tablet", "Joystick", "All of the above"],
            correct: 3,
            explanation: "All are standard input devices."
        },
        {
            question: "Video file format is:",
            options: ["TIFF", "AVI", "WAV", "Both (A) & (B)"],
            correct: 1,
            explanation: "AVI is a video container. TIFF is an image; WAV is audio."
        },
        {
            question: "Which one of the following is the property of multimedia system?",
            options: ["High storage", "High data rates", "Both (A) & (B)", "None of these"],
            correct: 2,
            explanation: "Multimedia requires large storage and high bandwidth for transmission."
        },
        {
            question: "A multimedia file:",
            options: ["Is same as any other regular file", "Must be accessed at specific rate", "Stored on remote server can't be delivered to its client", "None of these"],
            correct: 1,
            explanation: "Multimedia is isochronous, meaning it requires playback at a specific consistent rate."
        },
        {
            question: "A good example of hypermedia file:",
            options: ["The internet", "Level 1 video disc", "Audiotape", "Videotape"],
            correct: 0,
            explanation: "The Internet is the largest implementation of hypermedia."
        },
        {
            question: "JPEG stands for:",
            options: ["Joint Photo Experts Group", "Joint Photographic Experts Group", "Joint Processor Experts Group", "Joint Photographic Expression Group"],
            correct: 1,
            explanation: "JPEG stands for Joint Photographic Experts Group."
        },
        {
            question: "MMS stands for:",
            options: ["Multimedia system", "Multimedia messaging system", "Multimedia messaging services", "Multimedia services"],
            correct: 2,
            explanation: "MMS stands for Multimedia Messaging Services."
        },
        {
            question: "Moving picture experts group (MPEG) is used to compress:",
            options: ["Frames", "Images", "Audio", "Video"],
            correct: 3,
            explanation: "MPEG is the standard for video compression."
        },
        {
            question: "How many attributes control the characteristics of sound?",
            options: ["5", "4", "3", "2"],
            correct: 1,
            explanation: "Commonly cited as: Frequency, Amplitude, Waveform, and Duration."
        },
        {
            question: "Which of the following is a technique to blend two or more images to form a new image?",
            options: ["Modeling", "Morphing", "Animating", "Warping"],
            correct: 1,
            explanation: "Morphing involves warping and cross-dissolving to transform one image into another."
        },
        {
            question: "The text colour in presentation should contrast with the color of:",
            options: ["CPU", "Frame", "Stack", "Background"],
            correct: 3,
            explanation: "Basic design principle for readability."
        },
        {
            question: "Which files creates a perfect reproduction of the original images?",
            options: ["Shockwave", "Nx view", "GIF", "JPG"],
            correct: 2,
            explanation: "GIF uses lossless compression, whereas JPG is lossy."
        },
        {
            question: "How many step process for creating a 3D animation are required?",
            options: ["2", "3", "4", "5"],
            correct: 2,
            explanation: "Often cited as 4 steps: Modeling, Material mapping, Lighting/Animation, Rendering."
        },
        {
            question: "To receive signal, a translator is needed to decode signal and encode it again at a:",
            options: ["High quality", "Lower quality", "Same quality", "Bad quality"],
            correct: 2,
            explanation: "A signal repeater/translator aims to maintain signal integrity."
        },
        {
            question: "One of the disadvantages of multimedia:",
            options: ["Cost", "Adaptability", "Usability", "Relativity"],
            correct: 0,
            explanation: "Multimedia development and storage/hardware requirements can be expensive."
        },
        {
            question: "The people when weave multimedia into meaningful tapestries are called:",
            options: ["Programmers", "Multimedia developers", "Software engineers", "Multimedia engineers"],
            correct: 1,
            explanation: "This is a specific definition used in multimedia textbooks."
        },
        {
            question: "The combination of text, graphics art, sound, animation and video delivered by computer or other electronic devices are called:",
            options: ["Multimedia", "Hyper media", "Visual media", "None"],
            correct: 0,
            explanation: "This is the standard definition of multimedia."
        },
        {
            question: "The application in entertainment are:",
            options: ["Satellite", "Televisions", "Internet", "All of these"],
            correct: 3,
            explanation: "All are delivery channels for entertainment multimedia."
        },
        {
            question: "The example of multimedia capture device:",
            options: ["Camera", "Microphone", "Audio recorder", "All of these"],
            correct: 3,
            explanation: "These devices capture input (Video, Audio)."
        },
        {
            question: "The multimedia disadvantages is:",
            options: ["Lost of cyberspace", "Individualized", "Engrossing deep involvement", "None of these"],
            correct: 0,
            explanation: "Lost in cyberspace is a cited psychological disadvantage."
        },
        {
            question: "The major contents of multimedia services:",
            options: ["Multimedia hardware", "Operating system", "Multimedia software", "None of these"],
            correct: 2,
            explanation: "While hardware is the vehicle, the content of the service is the software/media itself."
        },
        {
            question: "When the curve passes through all the data points, then the curve is known as:",
            options: ["Approximation curve", "Pitch curve", "Data curve", "Interpolant curve"],
            correct: 3,
            explanation: "Interpolation means fitting a curve exactly through the given points."
        },
        {
            question: "Which of the following is not a synthetic entity?",
            options: ["Hyperbola", "Bezier curve", "B-spline curve", "Cubic curve"],
            correct: 0,
            explanation: "A Hyperbola is an analytic geometric shape, whereas Bezier and B-splines are synthetic curves."
        },
        {
            question: "Spline curve can be either:",
            options: ["Bezier curve", "B-spline", "Both (A) & (B)", "None of these"],
            correct: 2,
            explanation: "Both are types of spline representations."
        },
        {
            question: "If two curve segments join together the curve has:",
            options: ["G1 continuity", "G0 continuity", "G2 continuity", "G3 continuity"],
            correct: 1,
            explanation: "If they simply join (endpoints meet), it is Geometric Continuity 0."
        },
        {
            question: "The representations for surface modeling include:",
            options: ["Polygon mesh", "Parametric surfaces", "Quadratic surfaces", "All of these"],
            correct: 3,
            explanation: "All are valid methods to represent 3D surfaces."
        },
        {
            question: "The Bezier curve obtained from four control points is called:",
            options: ["Square Bezier curve", "Cubic Bezier curve", "Hectare Bezier curve", "Rectangle Bezier curve"],
            correct: 1,
            explanation: "4 control points define a degree-3 (Cubic) curve."
        },
        {
            question: "By which more complex objects can be constructed:",
            options: ["Quadratic surfaces", "Bezier curve", "Composite transformation", "None of these"],
            correct: 1,
            explanation: "Bezier curves are the building blocks for complex modeled objects."
        },
        {
            question: "An _____ can be considered as an extension of spherical surface:",
            options: ["Bezier", "Ellipsoid", "Shearing", "All of these"],
            correct: 1,
            explanation: "An ellipsoid is a sphere scaled by different factors along the axes."
        },
        {
            question: "A spline can be defined as:",
            options: ["Curved strip", "A smooth curve is drawn using a pencil", "A flexible strip used to generate a smooth curve through a designated set of points", "All of these"],
            correct: 2,
            explanation: "This is the historical drafting definition of a spline."
        },
        {
            question: "Cubic splines are:",
            options: ["Simple to corporate", "Provides continuity to curves", "Both (A) & (B)", "None of these"],
            correct: 2,
            explanation: "Cubic splines are the lowest degree curves that allow for smooth continuity."
        },
        {
            question: "The type of spline curve is:",
            options: ["Open spline", "Closed spline", "Both (A) & (B)", "None of these"],
            correct: 2,
            explanation: "Splines can be open (ends don't meet) or closed (loops)."
        },
        {
            question: "The degree of the curve is independent of the number of control points in:",
            options: ["Hermite cubic spline curve", "Bezier curve", "B-spline curve", "Hyperbola"],
            correct: 2,
            explanation: "In B-splines, you can define the degree independently of the number of control points."
        },
        {
            question: "The number of control points can be added or subtracted:",
            options: ["In Bezier curve", "In B spline curve", "In cubic spline curve", "All of these"],
            correct: 1,
            explanation: "B-splines allow local control, meaning adding/moving a point only affects a local section."
        },
        {
            question: "In Bezier curve, _____ of polygon actually lie on the curve:",
            options: ["Only the first control points", "Only the last control points", "Only the first and last control points", "All the control points"],
            correct: 2,
            explanation: "The Bezier curve is anchored at the first and last control points."
        },
        {
            question: "In Bezier curve, the curve follows:",
            options: ["The control points", "The shape of the defining polygon", "The defining points", "All of the above"],
            correct: 1,
            explanation: "This property is known as the convex hull property."
        },
        {
            question: "_____ curves allows local control of the curve:",
            options: ["Analytical", "Hermite cubic spline", "Bezier", "B-spline"],
            correct: 3,
            explanation: "This is the main advantage of B-splines over Beziers."
        },
        {
            question: "In the Bezier curve, the curve is always _____ to first and last segments of the polygons:",
            options: ["Normal", "Parallel", "Tangent", "All of these"],
            correct: 2,
            explanation: "The tangent vector at the start of the curve is parallel to the line connecting the first two control points."
        },
        {
            question: "The Bezier curve is smoother than the hermit cubic spline because it has _____ order derivatives:",
            options: ["Lower", "Higher", "Lower and Higher both", "None of them"],
            correct: 1,
            explanation: "Bezier curves are often described as having higher order smoothness available for manipulation."
        },
        {
            question: "The B spline curve has a:",
            options: ["First order continuity", "Second order continuity", "Zero order continuity", "None of these"],
            correct: 1,
            explanation: "Cubic B-splines automatically ensure second derivative continuity at the join points."
        },
        {
            question: "Which of the following can be first used to test for overlap of a curve with the clipping window?",
            options: ["Edges of the curve", "The centre of the curve", "The boundary rectangle for the curve", "Tangents to the curve"],
            correct: 2,
            explanation: "The Bounding Box is the fastest trivial rejection test to see if an object might overlap the screen."
        },
        {
            question: "The process of removal of hidden surfaces is termed as:",
            options: ["Clipping", "Copying", "Culling", "Shorting"],
            correct: 2,
            explanation: "Back-face culling is the process of removing surfaces that face away from the viewer."
        },
        {
            question: "The general homogeneous coordinates representations can also be written as:",
            options: ["(x, y, 1)", "(x, y, w)", "(x, y, 0)", "(x, y, z)"],
            correct: 1,
            explanation: "For a 2D point, the homogeneous representation is (x, y, w) where x' = x/w and y' = y/w."
        },
        {
            question: "What is the use of homogeneous coordinates and matrix representation?",
            options: ["To treat all 3 transformations in a consistent way", "To scale", "To rotating", "To shear the object"],
            correct: 0,
            explanation: "It allows translation to be represented as a matrix multiplication, enabling the composition of transformations."
        },
        {
            question: "If the scaling factor values < 1 then:",
            options: ["It reduces the size", "It increases the size", "It stunts the size", "None"],
            correct: 0,
            explanation: "Factors less than 1 shrink the object."
        },
        {
            question: "Scaling of a polygon is done by computing:",
            options: ["The product of coordinates of each vertex", "Coordinates of end points", "Center coordinates", "Only (A)"],
            correct: 3,
            explanation: "We multiply the coordinates of every vertex by the scaling factors."
        },
        {
            question: "The 2D scaling equation in the matrix form is:",
            options: ["[x' y'] = [x y] [sx 0; 0 sy]", "[x' y'] = [sx 0; 0 sy] [x y]", "[x' y'] = [x y] + [sx sy]", "None of these"],
            correct: 1,
            explanation: "New position equals Scaling Matrix multiplied by Original Position."
        },
        {
            question: "An ellipse can also be rotated about its center coordinates by rotating:",
            options: ["End points", "Major and minor axes", "Only (A)", "None of these"],
            correct: 1,
            explanation: "To rotate an ellipse, you rotate the axes that define its orientation."
        },
        {
            question: "A 2D rotation is applied to an object by:",
            options: ["Repositioning it along with the straight line path", "Repositioning it along with circular path", "Only (B)", "None of these"],
            correct: 1,
            explanation: "Rotation moves points along a circular arc around the pivot point."
        },
        {
            question: "How many homogeneous representations are possible for one point?",
            options: ["1", "0", "2", "Infinite"],
            correct: 3,
            explanation: "Since (x,y,w) is the same as (kx,ky,kw) for any non-zero k, there are infinite representations."
        },
        {
            question: "Reflection of a point about x-axis, followed by a counter clockwise rotation of 90°, is equivalent to reflection about the line:",
            options: ["y = x", "y = -x", "y = x", "x = 0"],
            correct: 1,
            explanation: "The combined transformation is equivalent to reflection about the line y = -x."
        }
    ],
    'operations-research': [
        {
            question: "Linear programming is a method of finding the optimal value of:",
            options: ["A linear function", "A quadratic function", "A cubic function", "No value"],
            correct: 0,
            explanation: "Linear programming deals with the optimization of linear objective functions subject to linear constraints."
        },
        {
            question: "In LPP, constraints are represented by:",
            options: ["Equations", "Inequalities", "Both Equations and Inequalities", "None"],
            correct: 2,
            explanation: "Constraints in LPP can be equalities (=) or inequalities (≤, ≥)."
        },
        {
            question: "The objective function of a LPP is:",
            options: ["To be maximized", "To be minimized", "To be optimized (maximized or minimized)", "None"],
            correct: 2,
            explanation: "The goal is optimization, which can be either maximization (profit) or minimization (cost)."
        }
    ]
};
