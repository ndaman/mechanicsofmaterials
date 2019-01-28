<span>schedule</span>

-   21 Sep - Torsion

-   24 Sep - Bending

-   26 Sep - Bending, HW4 Due

-   1 Oct (week of) - Transverse Shear

-   8 Oct (week of) - Exam 2

<span>outline</span>

angle of twist
==============

<span>angle of twist</span>

-   While in axial problems we examined the total deformation for the general case, in torsion we will examine the total angle of twist in general

-   Using the method of sections, we can consider a differential disk which has some internal torque as a function of *x*, *T*(*x*).

-   On this section, the shear strain will be related to the angle of twist by the thickness of the section (*d**x*) and the radial distance (*ρ*).

<span>angle of twist</span>

<img src="../figures/generaltorsion" alt="image" style="width:90.0%" />

<span>angle of twist</span>

-   *γ* and *d**ϕ* are related by
    $$d\\phi = \\gamma \\frac{dx}{\\rho}$$

-   We also know that *γ* = *τ*/*G* and *τ* = *T*(*x*)*ρ*/*J*(*x*) substituting both this gives
    $$d\\phi = \\frac{T(x)}{J(x)G(x)}dx$$

<span>multiple torques</span>

-   If a shaft is subjected to multiple torques, or if there is a discontinuous change in shape or material we can sum the change in angle over various segments
    $$\\phi = \\sum \\frac{TL}{JG}$$

<span>sign convention</span>

-   When we section a shaft and consider the internal torque, it is important to be consistent with our signs

-   Both torque and angle of twist should follow the same convention

-   The convention is to use the right hand rule with the thumb pointing normal to the cut, and the fingers curling in the positive direction

<span>example 5.8</span>

<img src="./example-5-8" alt="Determine the maximum shear stress in the post and the angle of twist of the wrench. Assume that the torque is about to turn the bottom of the post and the soil exerts uniform torsional resistance of \US[number-math-rm = \mathnormal, parse-numbers = false]{t}{lb.in/in} and that G=\US{5.5}{Msi}." style="width:30.0%" />

statically indeterminate torsion
================================

<span>statically indeterminate torsion</span>

-   Just as in axial problems, we can now solve statically indeterminate torsion problems

-   We will generally need one compatibility condition in addition to the equations of static equilibrium

-   At any given section cut the angle of twist needs to be equal, or often the supports restrict the angle of twist and we can use that knowledge

<span>example 5.10</span>

<img src="../figures/example-5-10" alt="The shaft shown is made from a steel tube bonded to a brass core. Plot the shear stress distribution along a radial line on its cross-section where G_{ST}=\US{11.4}{Msi} and G_{BR}=\US{5.20}{Msi}." style="width:60.0%" />

solid non-circular shafts
=========================

<span>non-circular shafts</span>

-   When a shaft is non-circular it is no longer axisymmetric, which causes cross-sections to bulge or warp

-   Because of this deformation, in-depth analysis of non-circular shafts in torsion is beyond the scope of this class

-   Using the theory of elasticity some standard shapes can be analyzed

<span>theory of elasticity</span>

<img src="../figures/torsion-cross-section" alt="image" style="width:40.0%" />

thin-walled tubes
=================

<span>shear flow</span>

-   Thin-walled tubes of non-circular cross-sections are commonly found in aerospace and other applications

-   We can analyze these using a technique called shear flow

-   Because the walls of the tube are thin, we assume that the shear stress is uniformly distributed through the wall thickness

<span>shear flow</span>

-   If we consider an arbitrary segment of a tube with varying thickness, we find from equilibrium that the product of the average shear stress and the thickness must be the same at every location on the cross-section
    *q* = *τ*<sub>*a**v**g*</sub>*t*

-   *q* is called the shear flow

<span>average shear stress</span>

-   We can relate the average shear stress to the torque by considering the torque produced about some point within the tubes boundary
    *T* = ∮*h**τ*<sub>*a**v**g*</sub>*t**d**s*

-   Where *h* is the distance from the reference point, *d**s* is the differential arc length and *t* is the tube thickness.

<span>average shear stress</span>

-   We notice that *τ*<sub>*a**v**g*</sub>*t* is equal to the shear flow, *q*, which must be constant

-   We can also simplify the integral by relating a similar area integral to the arc length integral
    *d**A*<sub>*m*</sub> = (1/2)*h**d**s*

-   Thus
    *T* = ∮*h**τ*<sub>*a**v**g*</sub>*t**d**s* = 2*q*∫*d**A*<sub>*m*</sub> = 2*q**A*<sub>*m*</sub>

<span>example 5.13</span>

<img src="../figures/example-5-13" alt="Determine the average shear stress at A and B." style="width:70.0%" />
