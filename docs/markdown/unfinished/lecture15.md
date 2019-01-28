<span>schedule</span>

-   28 Sep - Bending

-   1 Oct - Transverse Shear

-   3 Oct - Transverse Shear, HW5 Due

-   5 Oct - Transverse Shear

-   8 Oct (week of) - Exam 2

<span>outline</span>

<span>shear/moment homework</span>

-   Drawing shear and moment diagrams is a very important topic in this class

-   Knowing how to draw using MasteringEngineering is not

-   If you desire, you can turn in hand-drawn shear/moment diagrams from the homework at the beginning of class on 3 Oct

-   I will not accept any hand-worked homework late for any reason, you are welcome to use MasteringEngineering

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

moment of inertia
=================

<span>moment of inertia</span>

-   We know that *I* = ∫<sub>*A*</sub>*y*<sup>2</sup>*d**A*

-   For common shapes, this integral has been pre-calculated (about the centroid of the shape)

-   For compound shapes, we use the parallel axis theorem to combine inertias from multiple areas

<span>parallel axis theorem</span>

-   The parallel axis theorem is used to find the moment about any axis parallel to an axis passing through the centroid

-   If we consider an axis parallel to the *x*-axis, separated by some *d**y* we have
    *I*<sub>*x*</sub> = ∫<sub>*A*</sub>(*y* + *d**y*)<sup>2</sup>*d**A*

-   Which gives
    *I*<sub>*x*</sub> = ∫<sub>*A*</sub>*y*<sup>2</sup>*d**A* + 2*d**y*∫<sub>*A*</sub>*y**d**A* + *d**y*<sup>2</sup>∫<sub>*A*</sub>*d**A*

<span>parallel axis theorem</span>

-   The first integral is the moment of inertia about the original *x*-axis, which we will call $\\bar{I}\_x$

-   The second integral is zero since the *x*-axis passes through the centroid

-   This gives the parallel axis theorem
    $$I\_x = \\bar{I}\_x + A dy^2$$

<span>parallel axis theorem</span>

-   Similarly for the *y*-axis and polar moment of inertia we find
    $$I\_y = \\bar{I}\_y + A dx^2$$
    $$J\_O = \\bar{J}\_C + A d^2$$

<span>example 6.12</span>

<img src="../figures/example-6-12" alt="Find the maximum bending stress and draw the stress distribution through the thickness at that point." style="width:50.0%" />

group problems
==============

<span>group one</span>

<img src="../figures/group-6-1" alt="Determine the moment of inertia about the neutral axis" style="width:30.0%" />

<span>group two</span>

<img src="../figures/group-6-2" alt="Find the neutral axis and determine the moment of inertia about the neutral axis" style="width:30.0%" />

<span>group three</span>

<img src="../figures/group-6-3" alt="Show how the bending stress acts on a differential volume at point A and B." style="width:70.0%" />
