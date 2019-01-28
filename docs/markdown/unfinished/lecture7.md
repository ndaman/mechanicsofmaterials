<span>schedule</span>

-   10 Sep - Axial Load

-   12 Sep - Torsion

-   14 Sep - Torsion

<span>outline</span>

saint venant’s principle
========================

<span>saint venant’s principle</span>

-   We use Saint Venant’s principle to generalize various loading applications

-   If we apply a concentrated force, near where we apply it (for example, along a pin), the stress will not be very uniform

-   Far away from that point, however, the stess will be uniform, whether we apply the force with 1 pin, 2 pins, or via a uniform grip

<span>saint venant’s principle</span>

-   We use *saint venant’s principle* to replace difficult to model loads with easier ones

-   There are two conditions

    1.  The load must be statically equivalent

    2.  Our region of interest must be far enough away from the point where the load was applied

<span>saint venant’s principle</span>

<img src="../figures/st-venant" alt="image" style="width:80.0%" />

elastic axial deformation
=========================

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

<img src="../figures/example-4-7" alt="Assuming the bottom bar is rigid, find the force developed in each bar. AB and EF have cross-sectional areas of \SI{50}{mm^2} while CD has a cross-sectional area of \SI{30}{mm^2}." style="width:70.0%" />
