# AE333
## Mechanics of Materials
Lecture 2 - Stress<br/>
Dr. Nicholas Smith<br/>
Wichita State University, Department of Aerospace Engineering

August 20, 2020


----

## schedule

- 20 Aug - Stress
- 25 Aug - Strain, Homework 1 Due
- 27 Aug - Mechanical Properties, Project 1 Due
- 1 Sep - Exam Review

----

## office hours

- TBD
- As always, if you can't make it to office hours, just send me an e-mail and we'll try to work something out

----

## outline

- review
- stress
- average normal stress
- average shear stress

---

# review

----

## group one

![A 6 meter long beam is supported by pins at A (2 meters from the left end) and B (2 meters from right end). Point C is located exactly between A and B, 3 meters from either end of the beam. A couple moment of 60 kilo-newton-meters is applied at the left end and a load of 10 kilonewtons pointing down is applied at the right end. Find the internal loading at C.](../images/group1-1.png)<!-- .element width="50%" -->

Find the internal forces at C.

----

## group two

![A 3 meter long beam is supported by pins at both ends, A and B. There are two uniformly distributed loads applied, one beginning at A with a magnitude of 100 newtons per meter ending at the middle of the beam. The other begins at the middle with a magnitude of 200 newtons per meter and ends at B. Find the internal loading at the middle of the beam.](../images/group1-2.png)<!-- .element width="50%" -->

Find the internal forces at C.

----

## group three

![A 6 meter long beam is supported by pins at A, located 2 meters from the left end of the beam, and B, at the right end of the beam. A uniformly distributed load of 20 kilonewtons per meter is applied between the left end and A. Find the internal loading at point C located halfway between points A and B.](../images/group1-3.png)<!-- .element width="50%" -->

Find the internal forces at C.

----

## group four

![A 6 meter long beam is supported at both ends by pins. There is a uniformly distributed load of 10 kilonewtons per meter on the left half of the beam and a linear distributed load on the right half of the beam, with the left end at 10 kilonewtons per meter and the right end at zero. The point C is located at the center of the beam.](../images/group1-4.jpg)<!-- .element width="50%" -->

Find the internal forces at C.

---

# stress

----

## stress

-   For a continuous and cohesive material, consider an infinitely small
    cube of material
-   A finite force, $\Delta F$ will act on this material, and we can
    consider its three components, `$\Delta F_x$`, `$\Delta F_y$`, and
    `$\Delta F_z$`
-   The limit of the force divided by the area of the cube is defined as
    stress

----

## normal stress

-   The stress acting normal to a face of the cube is referred to as the
    normal stress
`$$\begin{aligned}
  \sigma_x &= \lim_{\Delta A_x \to 0} \frac{\Delta F_x}{\Delta A_x}\\
  \sigma_y &= \lim_{\Delta A_y \to 0} \frac{\Delta F_y}{\Delta A_y}\\
  \sigma_z &= \lim_{\Delta A_z \to 0} \frac{\Delta F_z}{\Delta A_z}
\end{aligned}$$
`

----

## shear stress

-   Similarly, forces acting tangent to the face of the cube create
    shear stresses
-   Often (but not always), $\tau$ is used instead of $\sigma$ for shear
    stresses
`$$\begin{aligned}
  \tau_{xy} &= \lim_{\Delta A_y \to 0} \frac{\Delta F_x}{\Delta A_y}\\
  \tau_{yz} &= \lim_{\Delta A_z \to 0} \frac{\Delta F_y}{\Delta A_z}\\
  \tau_{xz} &= \lim_{\Delta A_x \to 0} \frac{\Delta F_z}{\Delta A_x}
\end{aligned}$$
`

----

## general stress

![A cube with stresses illustrated on each of the faces, following the notation described previously.](../images/generalstress.png)

----

## units

-   stress has units of force per area
-   In metric units, this is Pa (or often MPa and GPa)
-   In english units, this is psi (or often ksi)

---

# average normal stress

----

## average normal stress

-   We can use statics to find the statically equivalent normal force
    acting on some cross-section
-   The average normal stress will be the normal force divided by the
    area of the cross-section
-   If a bar is loaded at different points, or if it changes
    cross-sectional area, the average normal stress can vary, we can
    find the stress at different cross-sections to find the maximum
    average normal stress

----

## example 1.5

![The bar with a width of 35 mm and a thickness of 10 mm is loaded at multiple locations. From the left end, at point A, there is a 12 kilonewton load (in the left direction) to the right of this at point B load another left-pointing load of 9 kilonewtons is applied. To the right of that, point C, another load of 4 kilonewtons is applied in the right direction, and finally at the right end, point D, a 22 kilonewton load is applied pointing to the right. Find the maximum average normal stress in the bar.](../images/example-1-5.jpg)

The bar shown as a width of 35 mm and a thickness of 10 mm. Find the maximum average normal stress in the bar.

----

## example 1.8

<div class="left"> <!-- .element width="40%" -->

![A block 200 mm long has a leg resting against the floor at its right end, point C, and is supported by a vertical hanging rod at its left end (points A and B). A 3 kilonewton force pointing down is applied at some distance, x, from the left end.](../images/example-1-8.jpg)

</div>

<div class="right"> <!-- .element width="50%" -->

Determine the position, x, of the load so that the average compressive stress at C is equal to the average tensile stress in the rod AB. The rod has an area of `$400 \text{ mm}^2$` and the contact at $C$ has an area of `$650 \text{ mm}^2$`.

</div>

---

# average shear stress

----

## shear stress

-   If we consider a section from a bridge-like structure we can
    demonstrate one way shear stress can be formed in a material
-   As a reminder, shear stress is formed by forces acting in the plane
    of a section cut

----

## shear stress

![A block bridging across two other blocks is loaded over the gap it is bridging. This loading creates a shear stress directly above the blocks it is bridging, which is further illustrated with some free body diagrams.](../images/shear-stress.jpg)<!-- .element width="30%" -->

----

## shear stress equilibrium

-   If we consider equilibrium of an element subjected to shear on one
    face, we will find that there must be shear forces on other faces to
    remain in equilibrium
-   In the following example, we will consider the sum of forces in the
    y-direction and the sum of moments about the x-axis
-   We can convert between stresses and forces by recalling that
    `$\sigma = F/A$`, or `$F = \sigma A$`

----

## shear stress equilibrium

![A block section is loaded horizontally along its top edge. For the block to remain in equilibrium, it is shown that equal and opposite shear stresses must develop along the other 3 faces.](../images/shear-equilibrium.jpg)<!-- .element width="90%" -->

----

## example 1-9

![A 6 meter long beam is shown with a pin support at the left end, a downward vertical load of 30 kilonewtons 2 meters from the left end and a rope support at a 3-4-5 triangle on the right edge (3 in the horizontal direction, 4 vertically). At the left end, the pin is in double shear, while the rope is attached with a single-shear bolt.](../images/example-1-9.jpg)<!-- .element width="50%" -->

Determine the average shear stress in the 20-mm diameter pin at `$A$` and the 30-mm diameter pin at `$B$`.

----

## example 1-11

<div class="left">

![A wooden block is shown with one leg at a 3-4-5 angle and a 600 pound compressive load acting in the direction of that leg.](../images/example-1-11.jpg)

</div>
<div class="right">

Determine the average compressive stress along the smooth contact of `$AB$` and `$BC$` and the average shear stress along the horizontal plane `$DB$`.

</div>

----

## example

Calculate the stresses for elements in last week's lecture:
- Stress in the workpiece
- Stress in the vise screw
- Stress in the pinboard
- Stress in St. Peter's Cross
