<span>schedule</span>

-   14 Sep - Axial Load, Torsion

-   17 Sep - Torsion, HW3 Due

-   19 Sep - Torsion

-   21 Sep - Bending

<span>outline</span>

superposition
=============

<span>superposition</span>

-   Some problems are too complicated to solve all at once

-   Instead, we break them up into two simpler problems

-   Each “sub-problem” must still satisfy equilibrium

-   Problem must be linear and the deformation should be small enough that it does not cause moment-equilibrium isssues

statically indeterminate
========================

<span>statically indeterminate</span>

-   There are many problems that are at least slightly over-constrained

-   While this is common engineering practice, it creates too many variables for statics analysis

-   These problems are called “statically indeterminate”

<span>statically indeterminate</span>

-   One extra equation we can use is called “compatibility” or the “kinematic condition”

-   We know that at the displacement must be equal on both sides of any arbitrary section we make in a member

-   We can separate a member into two parts, then use compatibility to relate the two unknown forces

<span>statically indeterminate</span>

<img src="../figures/statically-indeterminate" alt="image" style="width:30.0%" />

<span>example 4.7</span>

<img src="../figures/example-4-7" alt="Assuming the bottom bar is rigid, find the force developed in each bar. AB and EF have cross-sectional areas of \SI{50}{mm^2} while CD has a cross-sectional area of \SI{30}{mm^2}." style="width:40.0%" />

force method
============

<span>force method</span>

-   One way to solve statically indeterminate problems is using the principle of superposition

-   We choose one redundant support and remove it

-   We then add it back as a force separately (without the other forces in the problem)

<span>force method</span>

<img src="../figures/force-method" alt="image" style="width:80.0%" />

<span>force method</span>

-   We connect the two problems by requiring that the displacement in both frames adds to 0 to meet the support requirements

-   This is referred to as the equation of compatibility

<span>procedure</span>

-   Choose one support as redundant, write the equation of compatibility

-   Express the external load and redundant displacements in terms of load-displacement relationship

-   Draw free body diagrams and use the equations of equilibrium to solve

<span>example 4.9</span>

<img src="../figures/example-4-9" alt="The steel rod shown has a diamater of 10 mm. Determine the reactions at A and B^\prime." style="width:70.0%" />

thermal stress
==============

<span>thermal stress</span>

-   A change in temperature cases a material to either expand or contract

-   For most materials this is linear and can be described using the coefficient of linear expansion
    *δ*<sub>*T*</sub> = *α**Δ**T**L*

<span>thermal stress</span>

-   When a body is free to expand, the deformation can be readily calculated using  \[eq:thermal\]

-   If it is not free to expand, however, thermal stresses develop

-   We can use the force method described previously to find the thermal stresses developed

<span>example 4.12</span>

<img src="../figures/example-4-12" alt="An aluminum tube with cross-section of \SI{600}{mm^2} is used as a sleeve for a steel bolt with cross-sectional area of \SI{400}{mm^2}. When T=\SI{15}{\celsius} there is negligible force and a snug fit, find the force in the bolt and sleeve when T=\SI{80}{\celsius}." style="width:25.0%" />

torsion
=======

<span>torsion</span>

-   Torque is a moment that tends to twist a member about its axis

-   For small deformation problems, we assume that the length and radius do not change signicantly under torsion

-   The primary deformation we are concerned with in torsion is the angle of twist, denoted with *ϕ*

<span>shear</span>

<img src="../figures/torsion-disk" alt="image" style="width:40.0%" />

<span>torsion formula</span>

-   For a linearly elastic material, Hooke’s Law in shear will hold (*τ* = *G**γ*)

-   This means that, like shear strain, shear stress will vary linearly along the radius

<span>torsion formula</span>

-   We can find the total force on an element, *d**A* by multiplying the shear stress by the area
    *d**F* = *τ**d**A*

-   The torque (*d**T* = *ρ**d**F*) produced by this force is then
    *d**T* = *ρ*(*τ**d**A*)

<span>torsion formula</span>

-   Integrating  \[eq:diff-torque\] over the whole cross-section gives
    $$T = \\int\_A \\rho (\\tau dA) = \\frac{\\tau\_{max}}{c} \\int\_A \\rho^2 dA$$

-   The integral ∫<sub>*A*</sub>*ρ*<sup>2</sup>*d**A* is also called the Polar Moment of Inertia, *J*, so we can write
    $$\\tau\_{max} = \\frac{Tc}{J}$$

<span>polar moment of inertia</span>

-   We know that *J* = *i**n**t*<sub>*A*</sub>*ρ*<sup>2</sup>*d**A*, so we can compute this for some common shapes

-   For a solid circular cross-section, we have
    $$J = \\int\_0^c \\rho^2 (2\\pi \\rho d\\rho) = \\frac{\\pi}{2}c^4$$

-   For a circular tube we have
    $$J = \\int\_{c\_1}^{c\_2} \\rho^2 (2\\pi \\rho d\\rho) = \\frac{\\pi}{2}(c\_2^4-c\_1^4)$$

<span>example 5.1</span>

<img src="../figures/example-5-1" alt="The allowable shear stress is \SI{75}{MPa}. Determine the maximum torque that can be applied to each of the cross-sections shown and find the stress acting on a small element at A, B and C." style="width:80.0%" />
