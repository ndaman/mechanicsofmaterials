<span>schedule</span>

-   26 Sep - Bending, HW4 Due

-   28 Sep - Bending

-   1 Oct - Transverse Shear

-   3 Oct - Transverse Shear, HW5 Due

-   8 Oct (week of) - Exam 2

<span>outline</span>

<span>shear/moment homework</span>

-   Drawing shear and moment diagrams is a very important topic in this class

-   Knowing how to draw using MasteringEngineering is not

-   If you desire, you can turn in hand-drawn shear/moment diagrams from the homework at the beginning of class on 3 Oct

-   I will not accept any hand-worked homework late for any reason, you are welcome to use MasteringEngineering

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

<span>example 7.10</span>

<img src="../../../Statics/lectures/figures/example-7-10" alt="image" style="width:70.0%" />

bending deformation
===================

<span>bending deformation</span>

-   If we drew a grid on a specimen in bending, we would find that vertical lines tend to stay straight (but rotate)

-   Horizontal lines will become curved

-   If bending lifts the ends up (like a smile), then the top face will be in compression (and expand), while the bottom face will be in tension (and contract)

<span>bending deformation</span>

<img src="../figures/beam-deformation" alt="image" style="width:70.0%" />

<span>neutral axis</span>

-   Since the bottom is in tension and the top is in compression, there must be somewhere in between that is under no stress

-   We call that the neutral axis, and assume it does not change in length

-   We also assume that planar sections remain planar (no warping)

-   Finally, Poisson’s effects are neglected (cross-sections keep the same size and shape)

<span>strain</span>

-   We will now consider an infinitesimal beam element before and after deformation

-   *Δ**x* is located on the neutral axis and thus does not change in length after deformation

-   Some other line segment, *Δ**s* is located *y* away from the neutral axis and changes its length to *Δ**s*<sup>′</sup> after deformation

<span>strain</span>

<img src="../figures/beam-element" alt="image" style="width:40.0%" />

<span>strain</span>

-   We can now define strain at the line segment *Δ**s* as
    $$\\epsilon = \\lim\_{\\Delta s \\to 0} \\frac{\\Delta s^\\prime - \\Delta s}{\\Delta s}$$

<span>strain</span>

-   If we define *ρ* as the radius of curvature after deformation, thus *Δ**x* = *Δ**s* = *ρ**Δ**θ*

-   The radius of curvature at *Δ**s* is *ρ* − *y*, thus we can write
    $$\\epsilon = \\lim\_{\\Delta \\theta \\to 0} \\frac{(\\rho-y)\\Delta \\theta - \\rho \\Delta \\theta}{\\rho \\Delta \\theta}$$

-   Which gives
    $$\\epsilon = -\\frac{y}{\\rho}$$

flexure formula
===============

<span>hooke’s law</span>

-   If the beam is a linear material that follows Hooke’s Law, the stress must be linearly proportional to the strain

-   Thus the stress will vary linearly through the beam, just like the strain does

<span>neutral axis</span>

-   We have already hypothesized that a neutral axis must exist, we will now find its location

-   To be in equilibrium, the resultant force(s) produced by the stress must sum to zero, which means
    $$\\begin{aligned}
                \\sum F\_x &= 0 = \\int\_A dF = \\int\_A \\sigma dA\\\\
                &= \\int\_A -\\left( \\frac{y}{c} \\right) \\sigma\_{max} dA\\\\
                &= -\\frac{\\sigma\_{max}}{c} \\int\_A y dA
            \\end{aligned}$$

<span>neutral axis</span>

-   Since *σ*<sub>*m**a**x*</sub> and *c* are both non-zero constants, we know that
    ∫<sub>*A*</sub>*y**d**A* = 0

-   Which can only be satisfied at the horizontal centroidal axis, so the neutral axis is the centroidal axis

<span>bending moment</span>

-   The internal bending moment must be equal to the total moment produced by the stress distribution
    $$\\begin{aligned}
                M &= \\int\_A y dF = \\int\_A y (\\sigma dA) \\\\
                &= \\int\_A y \\left( \\frac{y}{c} \\sigma\_{max} \\right) dA \\\\
                &= \\frac{\\sigma\_{max}}{c} \\int\_A y^2 dA
            \\end{aligned}$$

<span>bending moment</span>

-   We recognize that ∫<sub>*A*</sub>*y*<sup>2</sup>*d**A* = *I*, and we re-arrange to write
    $$\\sigma\_{max} = \\frac{Mc}{I}$$

<span>procedure</span>

-   Find the internal moment at the point of interest, or draw a moment diagram to find the maximum point (if needed)

-   Determine the moment of inertia for the beam section

-   Find the neutral axis and/or the distance from the neutral axis to the point of interest

-   Use the flexure formula to find the stress

<span>example 6.12</span>

<img src="../figures/example-6-12" alt="Find the maximum bending stress and draw the stress distribution through the thickness at that point." style="width:50.0%" />
