<span>schedule</span>

-   24 Sep - Bending

-   26 Sep - Bending, HW4 Due

-   28 Sep - Bending

-   1 Oct (week of) - Transverse Shear

-   8 Oct (week of) - Exam 2

<span>outline</span>

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

shear and moment diagrams
=========================

<span>shear and moment diagrams</span>

-   The general approach to shear and moment diagrams is to first find the support reactions

-   Next we section the beam and instead of finding the internal force and moment at a single point, we find it as a function of *x*

-   Many beams will require piecewise sectioning

-   We then draw this as a shear and moment diagram

<span>sign convention</span>

<img src="../../../Statics/lectures/figures/beam-internal" alt="image" style="width:80.0%" />

<img src="../../../Statics/lectures/figures/beam-internal-cut" alt="image" style="width:80.0%" />

<span>example beam</span>

<img src="../../../Statics/lectures/figures/piece-wise-beam" alt="image" style="width:70.0%" />

<span>example beam</span>

<img src="../../../Statics/lectures/figures/shear-diagram" alt="image" style="width:70.0%" />

<span>example beam</span>

<img src="../../../Statics/lectures/figures/moment-diagram" alt="image" style="width:70.0%" />

graphical method
================

<span>relation between load, shear, moment</span>

-   When there are several forces, supports, or loading conditions applied to a beam, the piecewise method can be cumbersome

-   In this section we will examine the differential relationships between distributed load, shear, and bending moments

<span>distributed load</span>

<img src="../../../Statics/lectures/figures/distributed-load" alt="image" style="width:30.0%" />

<span>distributed load</span>

-   Consider a beam subjected to only distributed loading

-   If we section this beam in the middle (to remove both supports) we can relate *V* to the loading function *w*(*x*)

-   Considering the sum of forces in *y*:
    $$\\begin{aligned}
                V + w(x)\\Delta x - (V + \\Delta V) &= 0\\\\
                \\Delta V &= w(x) \\Delta x
            \\end{aligned}$$

<span>distributed load</span>

-   If we divide by *Δ**x* and let *Δ**x* → 0 we find
    $$\\frac{dV}{dx} = w(x)$$

-   Thus the slope of the shear diagram is equal to the distributed load function

<span>moment diagram</span>

-   If we consider the sum of moments about *O* on the same section we find
    $$\\begin{aligned}
                (M + \\Delta M) - (w(x)\\Delta x)k \\Delta x - V\\Delta x - M &= 0\\\\
                \\Delta M &= V \\Delta x + k w(x) \\Delta x ^2
            \\end{aligned}$$

-   Dividing by *Δ**x* and letting *Δ**x* → 0 gives
    $$\\frac{dM}{dx} = V$$

<span>concentrated forces</span>

-   If we consider a concentrated force (instead of a distributed load) we find
    *Δ**V* = *F*

-   This means that concentrated loads will cause the shear diagram to “jump” by the amount of the concentrated force (causing a discontinuity on our graph)

<span>couple moments</span>

-   If our section includes a couple moment, we find (from the moment equation) that
    *Δ**M* = *M*<sub>0</sub>

-   Thus the moment diagram will have a jump discontinuity

<span>example 7.9</span>

<img src="../../../Statics/lectures/figures/example-7-9" alt="image" style="width:70.0%" />

<span>example 7.10</span>

<img src="../../../Statics/lectures/figures/example-7-10" alt="image" style="width:70.0%" />
