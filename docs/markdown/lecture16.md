## AE333
## Mechanics of Materials
Lecture 16 - Bending<br/>
Dr. Nicholas Smith<br/>
Wichita State University, Department of Aerospace Engineering

4 Mar, 2019

----

## schedule

- 4 Mar - Transverse Shear
- 6 Mar - Exam Review
- 8 Mar - Exam 2
- 11-15 Mar - Spring Break

----
## outline

---
# compound centroids

----
## composite bodies

-   Often we have to deal with bodies that are not described by a continuous function, but are made of different materials or different shapes

-   We can use the same logic previously, but with a finite sum instead of an integral
$$\\begin{aligned}
  \\bar{x} \\sum W &= \\sum \\tilde{x} W\\\\
  \\bar{y} \\sum W &= \\sum \\tilde{y} W\\\\
  \\bar{z} \\sum W &= \\sum \\tilde{z} W
\\end{aligned}$$

----
## analysis procedure

-   Use a sketch to divide the body into sub-bodies
-   If a body has a hole, it may be easier to treat that volume as whole and then subtract the hole
-   Take note of any symmetry (an object symmetric about any axis will have a centroid along that axis)

---
# shear in straight members

----
## shear

-   We have discussed the internal stresses caused by the internal moment *M*
-   There are also internal shear stresses caused by the internal shear force *V*
-   We can illustrate the effect of internal shear stress by considering three boards, either resting on top of on another or bonded

----
## shear

![](images\bonded-boards.png)

# the shear formula

----
## shear formula

-   Internal shear causes a more complicated deformation state, so we will use an indirect method to find the shear stress-strain distribution
-   We will consider equilibrium along a section of a beam, then we will consider another section

----
## equilibrium

![](images\beam-fbd.png)

----
## equilibrium

![](images\fbd-newsection.jpg)

----
## equilibrium

-   There must be a shear force along the bottom to equilibrate the different stresses on either side of the section
-   If we assume that this shear is constant through the thickness, we obtain the following from equilibrium
$$\sum F_x = 0 = \int_{A^\prime} \sigma^\prime dA^\prime - \int_{A^\prime} \sigma dA^\prime - \tau (t dx)$$

----
## equilibrium
$$\\begin{aligned}
  0 &= \\int\_{A^\\prime} \\left( \\frac{M + dM}{I} \\right) y dA^\\prime - \\int\_{A^\\prime} \\left( \\frac{M}{I} \\right)y dA^\\prime - \\tau(t dx) \\\\
  \\left( \\frac{M}{I} \\right) \\int\_{A^\\prime} y dA^\\prime &= \\tau (t dx)\\\\
  \\tau &= \\frac{1}{It} \\left( \\frac{dM}{dx} \\right)\\int\_{A^\\prime} y dA^\\prime
\\end{aligned}$$

----
## shear formula

-   In this formula, recall that $V = \\frac{dM}{dx}$
-   We also call *Q* the moment of the area `$A^\prime$` which is equal to `$\int_{a^\prime} y dA^\prime$`
-   We can also write *Q* in terms of the centroid
$$Q = \\bar{y}^\\prime A^\\prime$$

----
## shear formula

-   Simplified, the shear formula is
$$\\tau = \\frac{VQ}{It}$$
-   *Q* poses the greatest difficulty in calculations, so we will consider a few examples

----
## Q

-   *Q* represents the moment of the cross-sectional area above (or below) the point at which the shear stress is being calculated
-   We apply the formula to that area

----
## Q

![](images\Q.jpg)

----
## shear formula limitations

-   A major assumption made is that the shear stress was constant through the thickness, essentially we have found the average shear
-   This is more accurate the more slender a beam is (small *b* and large *h*)
-   The formula is also not accurate for cross sections that change or have boundaries that are not right angles

----
## procedure

-   First we find the internal shear, *V*
-   Find *I*, the moment of inertia (of the entire section) about the neutral axis
-   Find *t* from an imaginary cross-section at the point of interest
-   Calculate *Q* from either the area above or below the point of interest
-   $\tau$ acts in the same direction as *V* (and must be equilibrated on other faces)

----
## example 7.1

![](images\example-7-1.jpg)

Determine the maximum stress needed by a glue to hold the boards together.

----
## example 7.3

![](images\example-7-3.jpg)
