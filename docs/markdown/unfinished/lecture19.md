<span>schedule</span>

-   8 Oct - Exam 2 Review, HW6 Due

-   10 Oct - Exam 2

-   12 Oct - Combined Loading

-   15 Oct - (Fall Break)

-   17 Oct - Combined Loading

<span>outline</span>

<span>0.5</span>

<span>0.5</span>

exam
====

<span>exam format</span>

-   New equation sheet (see blackboard, inside cover of Mechanics of Materials Text)

-   Similar format to last exam

-   3 questions

topics
======

<span>axial load</span>

-   Saint Venant’s Principle

-   Elastic Deformation

-   Superposition

-   Statically Indeterminate

-   Force Method

-   Thermal Stress

<span>torsion</span>

-   Torsional deformation

-   Torsion formula

-   Power transmission

-   Angle of twist

-   Statically indeterminate torsion

-   Thin-walled tubes

<span>bending</span>

-   Shear and moment diagrams

-   Bending deformation

-   Flexure formula

<span>transverse shear</span>

-   Shear formula

-   Shear flow in built-up members

axial load
==========

<span>axially loaded member</span>

-   We can use Hooke’s Law to find the deformation of a general body under axial loading (below the elastic limit)

    <img src="../figures/axial-load" alt="image" style="width:70.0%" />

<span>axially loaded member</span>

-   For some differential element, we can consider the internal forces and stresses
    $$\\sigma = \\frac{N(x)}{A(x)} = E(x) \\epsilon(x) = E(x) \\left(\\frac{d\\delta}{dx}\\right)$$

-   We can solve this for *d**δ* to find
    $$d \\delta = \\frac{N(x) dx}{A(x)E(x)}$$

-   We integrate this over the length of the bar to find the total displacement

<span>sign convention</span>

-   In general, we consider a force or stress to be positive if it causes tension and elongation

-   It is negative if it causes compression and contraction

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

<span>thermal stress</span>

-   A change in temperature cases a material to either expand or contract

-   For most materials this is linear and can be described using the coefficient of linear expansion
    *δ*<sub>*T*</sub> = *α**Δ**T**L*

<span>thermal stress</span>

-   When a body is free to expand, the deformation can be readily calculated using  \[eq:thermal\]

-   If it is not free to expand, however, thermal stresses develop

-   We can use the force method described previously to find the thermal stresses developed

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

bending
=======

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

transverse shear
================

<span>shear formula</span>

-   Internal shear causes a more complicated deformation state, so we will use an indirect method to find the shear stress-strain distribution

-   We will consider equilibrium along a section of a beam, then we will consider another section

<span>equilibrium</span>

<img src="../figures/beam-fbd" alt="image" style="width:90.0%" />

<span>equilibrium</span>

<img src="../figures/fbd-newsection" alt="image" style="width:50.0%" />

<span>equilibrium</span>

-   There must be a shear force along the bottom to equilibrate the different stresses on either side of the section

-   If we assume that this shear is constant through the thickness, we obtain the following from equilibrium
    ∑*F*<sub>*x*</sub> = 0 = ∫<sub>*A*<sup>′</sup></sub>*σ*<sup>′</sup>*d**A*<sup>′</sup> − ∫<sub>*A*<sup>′</sup></sub>*σ**d**A*<sup>′</sup> − *τ*(*t**d**x*)=0

<span>equilibrium</span>
$$\\begin{aligned}
        0 &= \\int\_{A^\\prime} \\left( \\frac{M + dM}{I} \\right) y dA^\\prime - \\int\_{A^\\prime} \\left( \\frac{M}{I} \\right)y dA^\\prime - \\tau(t dx) \\\\
        \\left( \\frac{M}{I} \\right) \\int\_{A^\\prime} y dA^\\prime &= \\tau (t dx)\\\\
        \\tau &= \\frac{1}{It} \\left( \\frac{dM}{dx} \\right)\\int\_{A^\\prime} y dA^\\prime
    \\end{aligned}$$

<span>shear formula</span>

-   In this formula, recall that $V = \\frac{dM}{dx}$

-   We also call *Q* the moment of the area *A*<sup>′</sup> which is equal to ∫<sub>*A*<sup>′</sup></sub>*y**d**A*<sup>′</sup>

-   We can also write *Q* in terms of the centroid
    $$\\label{eq:Q}
                Q = \\bar{y}^\\prime A^\\prime$$

<span>shear formula</span>

-   Simplified, the shear formula is
    $$\\tau = \\frac{VQ}{It}$$

-   *Q* poses the greatest difficulty in calculations, so we will consider a few examples

<span>Q</span>

-   *Q* represents the moment of the cross-sectional area above (or below) the point at which the shear stress is being calculated

-   We apply  \[eq:Q\] to that area

<span>Q</span>

<img src="../figures/Q" alt="Examples of Q." style="width:40.0%" />

<span>shear formula limitations</span>

-   A major assumption made is that the shear stress was constant through the thickness, essentially we have found the average shear

-   This is more accurate the more slender a beam is (small *b* and large *h*)

-   The formula is also not accurate for cross sections that change or have boundaries that are not right angles

<span>procedure</span>

-   First we find the internal shear, *V*

-   Find *I*, the moment of inertia (of the entire section) about the neutral axis

-   Find *t* from an imaginary cross-section at the point of interest

-   Calculate *Q* from either the area above or below the point of interest

-   *τ* acts in the same direction as *V* (and must be equilibrated on other faces)

<span>built-up members</span>

-   Often in practice, structural members are “built-up”

-   This refers to parts that are comprised of several other parts to have greater strength in certain areas

-   We need to analyze the shear between these members to choose appropriate adhesives or fasteners

<span>equilibrium</span>

<img src="../figures/built-up-equilibrium" alt="image" style="width:80.0%" />

<span>equilibrium</span>

-   From equilibrium we see that
    $$dF = \\frac{dM}{I} \\int\_{A^\\prime} y dA^\\prime$$

-   We recall that this integral represents *Q*, we can also define the shear flow as *q* = *d**F*/*d**x* and recall that *d**M*/*d**x* = *V* to find
    $$q = \\frac{VQ}{I}$$

<span>fastener spacing</span>

-   We can use shear flow to determine fastener spacing

-   Say a fastener can support a shear force of *F*<sub>0</sub> before failure

-   The shear flow (force/distance) times the spacing (distance) will give the shear force per fastener
    *F* = *q**s*

<span>multiple fasteners</span>

<img src="../figures/shear-flow-multiple" alt="image" style="width:80.0%" />

<span>multiple fasteners</span>

-   When multiple arms are connecting the same area (as shown in the previous slide)

-   The shear flow “seen” by each fastener is *q*/*n* where *n* is the number of fastners per area


