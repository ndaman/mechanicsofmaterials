
# AE333
## Mechanics of Materials
Lecture 8 - Axial Load<br/>
Dr. Nicholas Smith<br/>
Wichita State University, Department of Aerospace Engineering

February 14, 2020

----

## schedule

- 14 Feb - Axial Load
- 17 Feb - Torsion
- 19 Feb - Torsion
- 21 Feb - Bending, HW3 Due

----
## outline

- superposition
- statically indeterminate
- force method
- thermal stress

---
# superposition

----
## superposition

-   Some problems are too complicated to solve all at once
-   Instead, we break them up into two simpler problems
-   Each "sub-problem" must still satisfy equilibrium
-   Problem must be linear and the deformation should be small enough that it does not cause moment-equilibrium isssues

---
# statically indeterminate

----
## statically indeterminate

-   There are many problems that are at least slightly over-constrained
-   While this is common engineering practice, it creates too many variables for statics analysis
-   These problems are called "statically indeterminate"

----
## statically indeterminate

-   One extra equation we can use is called "compatibility" or the "kinematic condition"
-   We know that at the displacement must be equal on both sides of any arbitrary section we make in a member
-   We can separate a member into two parts, then use compatibility to relate the two unknown forces

----
## statically indeterminate

![A 5 m long, vertically-oriented bar is fixed at both ends, with a 500 N downward load applied 2 m from the top.](images\statically-indeterminate.jpg) <!-- .element width="25%" -->

----
## example 4.7

<div class="left">
![A 0.8 m long rigid horizontal bar is supported by hanging from 3 vertical rods. Rod AB supports the left end, rod CD supports the middle and rod EF supports the right end. A 15 kN load is applied 0.2 m from the left end.](images\example-4-7.jpg)
</div>
<div class="right">
Assuming the bottom bar is rigid, find the force developed in each bar.
AB and EF have cross-sectional areas of 50 mm<sup>2</sup> while CD has a cross-sectional area of 30 mm<sup>2</sup>.
</div>

---
# force method

----
## force method

-   One way to solve statically indeterminate problems is using the principle of superposition
-   We choose one redundant support and remove it
-   We then add it back as a force separately (without the other forces in the problem)

----
## force method

![An illustration of the force method, we have the same statically indeterminate problem as before, a 5 m long, vertically-oriented bar is fixed at both ends, with a 500 N downward load applied 2 m from the top. We set this equivalent to a a bar with the same load, but no support on the bottom end. We then add a force which will provide enough displacement to cancel out the displacement introduced by removing the load.](images\force-method.png)

----
## force method

-   We connect the two problems by requiring that the displacement in both frames adds to 0 to meet the support requirements
-   This is referred to as the equation of compatibility

----
## procedure

-   Choose one support as redundant, write the equation of compatibility
-   Express the external load and redundant displacements in terms of load-displacement relationship
-   Draw free body diagrams and use the equations of equilibrium to solve

----
## example 4.9

![A 1200 mm long horizontal rod is fixed at its left end and has a fixed support 0.2 mm away from its right end. A 20 kN load is applied to the right 400 mm away from its left end.](images\example-4-9.jpg)

The steel rod shown has a diamater of 10 mm. Determine the reactions at A and B'.

---
# thermal stress

----
## thermal stress

-   A change in temperature cases a material to either expand or contract
-   For most materials this is linear and can be described using the coefficient of linear expansion
`$$\delta_T = \alpha \Delta T L$$`

----
## thermal stress

-   When a body is free to expand, the deformation can be readily calculated using
-   If it is not free to expand, however, thermal stresses develop
-   We can use the force method described previously to find the thermal stresses developed

----
## example 4.12

<div class="left">
![An aluminum tube used as a sleeve for a steel bolt. The tube is 150 mm long.](images\example-4-12.jpg)
</div>
<div class="right">
An aluminum tube with cross-section of 600 mm<sup>2</sup> is used as a sleeve for a steel bolt with cross-sectional area of 400 mm<sup>2</sup>. When T=15 degrees Celsius there is negligible force and a snug fit, find the force in the bolt and sleeve when T=80 degrees Celsius.
</div>
