<span>schedule</span>

-   12 Sep - Axial Load

-   14 Sep - Torsion

-   17 Sep - Torsion, HW3 Due

-   19 Sep - Bending

<span>outline</span>

review
======

<span>review</span>

-   What is Saint Venant’s Principle?

-   How do we find axial deformation, in general?

<span>example 4.2</span>

<img src="../figures/example-4-2" alt="A steel rod with a 10mm diameter is attached to a rigid collar passing through an aluminum tube with cross-sectional area of \SI{400}{mm}^2. Find the displacement at C if E_{st} = \SI{200}{GPa} and E_{al} = \SI{70}{GPa}." style="width:70.0%" />

<span>example 4.4</span>

<img src="../figures/example-4-4" alt="The cone shown has a specific weight of \gamma = \SI{6}{kN/m^3} and E=\SI{9}{GPa}. Determine how far the end is displaced due to gravity." style="width:20.0%" />

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
