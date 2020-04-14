## AE333
## Mechanics of Materials
Lecture 23 - Deflection of Beams<br/>
Dr. Nicholas Smith<br/>
Wichita State University, Department of Aerospace Engineering

15 Apr, 2020

----

## schedule

- 15 Apr - Beam Deflection
- 17 Apr - Recitation, HW8 Due
- 20 Apr - Beam Deflection (discontinuity functions)
- 20 Apr - Exam 3a Due by midnight
- 22 Apr - Beam Deflection (superposition)
- 24 Apr - Recitation, HW9 Due

----
## outline

<!-- vim-markdown-toc GFM -->

* deflection of beams and shafts
* slope and displacement

<!-- vim-markdown-toc -->

---
# deflection of beams and shafts

----
## elastic curve

-   Before finding the exact displacement, it is useful to sketch the approximate deformed shape of a beam
-   For difficult beams, it is useful to draw the moment curve first
-   Positive internal moment tends to bend the beam concave up, while negative moment tends to bend the beam concave down

----
## elastic curve

![](../images/elastic-curve.jpg) <!-- .element width="40%" -->

----
## elastic curve

![](../images/elastic-curve2.jpg) <!-- .element width="40%" -->

----
## moment-curvature

-   In Chapter 6 we compared the strain in a segement of a beam to the radius of curvature and found

$$\\frac{1}{\\rho} = -\\frac{\\epsilon}{y}$$

-   Since Hooke’s Law applies, *ϵ* = *σ*/*E* = −*My*/*EI*, substituting gives

$$\\frac{1}{\\rho} = \\frac{M}{EI}$$

----
## sign convention

![](../images/curvature.jpg) <!-- .element width="60%" -->

`$\rho$` is positive when the center of the arc is above the beam, negative when it is below.

---
# slope and displacement

----
## curvature

-   When talking about displacement in beams, we use the coordinates *v* and *x*, where *v* is the vertical displacement and *x* is the horizontal position
-   In this notation, curvature is formally related to displacement according to

$$\\frac{1}{\\rho} = \\frac{d^2v/dx^2}{\[1+(dv/dx)^2\]^{3/2}} = \\frac{M}{EI}$$

----
## curvature

-   The previous equation is difficult to solve in general, but for cases of small displacement, (*dv*/*dx*)<sup>2</sup> will be negligible compared to 1, which then simplifies to

$$\\frac{d^2v}{dx^2} = \\frac{M}{EI}$$

----
## flexural rigidity

-   In general, *M*, is a function of *x*, but *EI* (known as the flexural rigidity) is a constant along the length of the beam
-   In this case, we can say

$$\\begin{aligned}
  EI\\frac{d^2v}{dx^2} &= M(x) \\\\
  EI\\frac{d^3v}{dx^3} &= V(x) \\\\
  EI\\frac{d^4v}{dx^4} &= w(x)
\\end{aligned}$$

----
## boundary conditions

-   If a support restricts displacement, but not rotation, we will have a boundary condition of *v* = 0 at that point
-   Supports that restrict rotation give a boundary condition that *θ* = 0

----
## continuity conditions

-   If we have a piecewise function for *M*(*x*), not all integration constants can be found from the boundary conditions
-   Instead, we must also use continuity conditions to ensure that the slope and displacement are continuous at every point
-   In other words, for two sets of functions, *θ*<sub>1</sub>(*x*) and *v*<sub>1</sub>(*x*), *θ*<sub>2</sub>(*x*), and *v*<sub>2</sub>(*x*), *θ*<sub>1</sub>(*a*)=*θ*<sub>2</sub>(*a*) and *v*<sub>1</sub>(*a*)=*v*<sub>2</sub>(*a*)

----
## slope

-   For small displacements, we have
    *θ* ≈ tan*θ* = *dv*/*dx*

----
## example 12.1

![](../images/example-12-1.jpg) <!-- .element width="60%" -->

Determine the maximum deflection if EI is constant.

----
## example 12.4

![](../images/example-12-4.jpg)

Determine the displacement at C, EI is constant.
