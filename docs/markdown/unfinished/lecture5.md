<span>schedule</span>

-   31 Aug - Mechanical Properties, HW1 Due

-   5 Sep - Exam 1 Review, HW2 Due

-   7 Sep - Exam 1

-   10 Sep - Axial Load

<span>outline</span>

strain
======

<span>deformation</span>

-   When forces are applied to a body, it will change its shape and size

-   We call these changes *deformation*

-   Sometimes they are barely noticeable (steel), other times they are very significant (rubber)

<span>strain</span>

-   Strain is a more precise measurement of the deformation of a body

-   Normal strain is given as the change in length divided by the original length
    $$\\epsilon = \\frac{L-L\_0}{L\_0}$$

-   We can consider the average normal strain (over an entire body) or the local strain (take an infinitely small portion and calculate the strain there)

<span>units</span>

-   Since we divide length by length, strain is unitless

-   However it is customary to use “in/in” or for stiff specimens to use the phrase “microstrain” as a unit

-   Strain can also sometimes be represented as a percent

<span>shear strain</span>

-   Normal strain causes a line segement to expand or contract

-   Deformation can also cause two lines to change their relative angle

-   The change in angle between two originally perpeindicular line segments is called shear strain
    $$\\gamma = \\frac{\\pi}{2} - \\theta$$

<span>shear strain</span>

<img src="../figures/shear-strain" alt="image" style="width:70.0%" />

<span>cartesian components</span>

-   If we consider a very small cube/prism with sides of *Δ**x*, *Δ**y*, and *Δ**z*, normal strains will change the side lengths to
    (1 + *ϵ*<sub>*x*</sub>)*Δ**x*  (1 + *ϵ*<sub>*y*</sub>)*Δ**y*  (1 + *ϵ*<sub>*z*</sub>)*Δ**z*

-   And the shear strains will change the shape
    $$\\frac{\\pi}{2}-\\gamma\_{xy} \\qquad \\frac{\\pi}{2}-\\gamma\_{yz} \\qquad \\frac{\\pi}{2}-\\gamma\_{xz}$$

<span>small strain</span>

-   Most engineering analysis is based on the assumption of small strains

-   This is valid for many materials (wood, metal), but not for rubbers and some other polymers

-   When strains are small, we assume that the change in angle, *Δ**θ* is very small

-   sin*Δ**θ* ≈ *Δ**θ*, cos*Δ**θ* ≈ 1, tan*Δ**θ* ≈ *Δ**θ*

<span>example 2.1</span>

<img src="../figures/example-2-1" alt="Find the normal strains in the two wires if A moves to A^\prime" style="width:50.0%" />

<span>example 2.3</span>

<img src="../figures/example-2-3" alt="The plate is fixed along AB and held in horizontal guides along AD and BC. If the right side is displaced 2 mm find the average normal strain along AC and the shear strain at E relative to the x and y axes." style="width:50.0%" />

stress-strain
=============

<span>stress-strain</span>

-   Most engineering materials can be characterized by their stress-strain diagram

-   Comes from a tensile or compressive test, where a load is applied (gives stress) and the strain is measured (via an extensometer or strain gauge)

-   “Engineering stress” is plotted on the y-axis vs. “engineering strain” on the x-axis

<span>stress-strain</span>

<img src="../figures/stress-strain" alt="image" style="width:50.0%" />

<span>elastic behavior</span>

-   Most of the time, the linear region is the one we are most interested in

-   In this region, the material is elastic, meaning when the load is removed the material will return to its original state

<span>elastic behavior</span>

-   Because the stress-strain curve is a straight line, we can relate stress and strain with a single constant

-   This constant is known as the *modulus of elasticity* or *young’s modulus*
    *σ* = *E**ϵ*

<span>plastic behavior</span>

-   Yielding occurs when stress increases beyond the “yield stress” or “elastic limit”, this is when plastic deformation occurs, meaning the material will not go back to its original shape

-   Strain hardening is common in many metals, and means as more stress is applied the material becomes more stiff

<span>plastic behavior</span>

-   Necking occurs when the material begins to have a noticeable “neck” due to being stretched very thin and lower forces are required to deform the material

<span>true stress-strain</span>

-   True stress and strain use the actual material cross-section (instead of the original cross-section) to calculate stress and strain

-   In the elastic region the difference is negligible, so in many cases we just stick with engineering strain, even if we know it is “wrong”

<span>ductile materials</span>

-   Ductile materials can undergo large strains before failure

-   One way to report how ductile a material is is known as percent elongation

-   Steel, brass, molybdenum, and zinc exhibit similar ductile stress-strain characteristics

-   Aluminum is often considered ductile, but it’s stress-strain behavior is a bit different

<span>brittle materials</span>

-   Materials that exhibit little or no yielding before failure are called *brittle*

-   Cast iron, concrete, and glass are common brittle materials

-   Brittle materials fail easily in tension, but are very strong in compression

<span>strain hardening</span>

<img src="../figures/strain-hardening" alt="image" style="width:40.0%" />

strain energy
=============

<span>strain energy</span>

-   Work in physics is defined as force times distance

-   As a force is applied to a material, the energy from the work done by the load is stored in the material and called strain energy

-   In engineering, we often use the strain energy density, or the amount of strain energy per unit volume of material
    $$u = \\frac{1}{2} \\sigma \\epsilon$$

<span>toughness</span>

-   Graphically, the area under the stress strain curve represents the strain energy density

-   We call the entire region (usually for a ductile material) the “toughness”

-   Some hardened steels have a high failure strength, but are not very ductile, this gives them a lower toughness

<span>example 3.3</span>

<img src="../figures/example-3-3" alt="The aluminum rod shown has a circular cross-section. Determine the elongation of the rod when load is applied using the given stress-strain diagram." style="width:70.0%" />

poisson’s ratio
===============

<span>poisson’s ratio</span>

-   When a material is stretched in one direction, it tends to contract in the transverse direction

-   The ratio of transverse to axial strain is called “Poisson’s ratio”
    $$\\nu = - \\frac{\\epsilon\_{transverse}}{\\epsilon\_{axial}}$$

shear stress-strain
===================

<span>shear stress-strain</span>

-   It can be experimentally difficult to obtain a state of pure shear, but a common method for many materials is to place a thin tube in torsion

-   For most engineering materials, the shear stress-strain behavior is linear in the elastic region, but has a different constant relating stress to strain, known as the “Shear Modulus”
    *τ* = *G**γ*

<span>elastic constants</span>

-   For most materials, *E*, *G* and *ν* are related by the following expression
    $$G = \\frac{E}{2(1+\\nu)}$$

<span>example 3.5</span>

<img src="../figures/example-3-5" alt="Determine G for the specimen shown. Also find the maximum distance d, that the top could be displaced horizontally while remaining elastic. What force V is required to cause this displacement?" style="width:80.0%" />
