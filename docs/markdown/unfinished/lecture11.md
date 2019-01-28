<span>schedule</span>

-   19 Sep - Torsion, HW3 Due

-   21 Sep - Torsion

-   24 Sep - Bending

-   26 Sep - Bending, HW4 Due

-   1 Oct (week of) - Transverse Shear

-   8 Oct (week of) - Exam 2

<span>outline</span>

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

power transmission
==================

<span>power transmission</span>

-   Shafts and tubes are often connected to belts and drives, and the torque, speed, and power are all related

-   Power is the rate of work done, for rotation problems, *P* = *T**ω*

-   We are often given the frequency *f* instead of the angular velocity, *ω*, in this case *P* = 2*π**f**T*

<span>power units</span>

-   In SI Units, power is expressed in Watts ($\\SI{1}{W} = \\SI{1}{N.m/s}$)

-   In Freedom Units, power is expressed in Horsepower ($\\US{1}{hp} = \\US{550}{ft.lb/s}$)

<span>shaft design</span>

-   We often know the power and frequency of a drive, and need to design a shaft such that the shear stress is acceptable

-   We can easily find the torque as *T* = *P*/2*π**f*, we can use this combined with the torsion equation
    $$\\tau\_{max} = \\frac{Tc}{J}$$
     to find the appropriate shaft diameter.

-   For solid shafts we can solve for *c* uniquely, but for hollow shafts there will be a range of possibilities

<span>example 5.4</span>

<img src="../figures/example-5-4" alt="The steel shaft shown is connected to a \US{5}{hp} motor that rotates at \omega=\US{175}{rpm}. If \tau_{allow}=\US{14.5}{ksi}, determine the required shaft diameter." style="width:70.0%" />

group problems
==============

<span>group one</span>

<img src="../figures/group5-1" alt="The solid circular shaft is subjected to a an internal torque of \SI{5}{kN.m}. Determine the shear stress at A and B and represent each state of stress on a volume element." style="width:50.0%" />

<span>group two</span>

<img src="../figures/group5-2" alt="The hollow circular shaft is subjected to a an internal torque of \SI{10}{kN.m}. Determine the shear stress at A and B and represent each state of stress on a volume element." style="width:70.0%" />

<span>group three</span>

<img src="../figures/group5-3" alt="The circular shaft is hollow from A to B and solid from B to C. Determine the shear stress at A and B. The outer diameter is \SI{80}{mm} and the wall thickness is \SI{10}{mm}." style="width:70.0%" />
