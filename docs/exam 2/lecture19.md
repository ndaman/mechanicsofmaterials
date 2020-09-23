## AE333
## Mechanics of Materials
Lecture 14 - Transverse Shear<br/>
Dr. Nicholas Smith<br/>
Wichita State University, Department of Aerospace Engineering

1 October, 2020

----
## schedule

- 1 Oct - Transverse Shear
- 6 Oct - Exam review, Homework 6 Due, Homework 5 Self-Grade Due
- 8 Oct - Exam 2
- 13 Oct - Combined Loading

----
## outline

<!-- vim-markdown-toc GFM -->

* shear flow in built-up members

<!-- vim-markdown-toc -->

---
# shear flow in built-up members

----
## built-up members

-   Often in practice, structural members are "built-up"
-   This refers to parts that are comprised of several other parts to have greater strength in certain areas
-   We need to analyze the shear between these members to choose appropriate adhesives or fasteners

----
## equilibrium

![](../images/built-up-equilibrium.jpg)

----
## equilibrium

-   From equilibrium we see that

$$dF = \\frac{dM}{I} \\int\_{A^\\prime} y dA^\\prime$$

-   We recall that this integral represents *Q*, we can also define the shear flow as *q*=*dF*/*dx* and recall that *dM*/*dx*=*V* to find

$$q = \\frac{VQ}{I}$$

----
## fastener spacing

-   We can use shear flow to determine fastener spacing
-   Say a fastener can support a shear force of *F*<sub>0</sub> before failure
-   The shear flow (force/distance) times the spacing (distance) will give the shear force per fastener
    *F*=*qs*

----
## multiple fasteners

![](../images/shear-flow-multiple.jpg)

----
## multiple fasteners

-   When multiple arms are connecting the same area (as shown in the previous slide)
-   The shear flow "seen" by each fastener is *q*/*n* where *n* is the number of fasteners per area

----
## example 7.4

![](../images/example-7-4.jpg) <!-- .element width="30%" -->

Determine the shear flow at B and B' that must be resisted by glue to bond the boards together.

----
## example 7.5

<div class="left">

![](../images/example-7-5.jpg)

</div>

<div class="right">

If each nail can support a maximum shear force of 30 lb, determine the maximum spacing of the nails at B and at C so that the beam can support the force of 80 lb.

</div>

----
## example 7.6

![](../images/example-7-6.jpg) <!-- .element width="50%" -->

Nails with a shear strength of 40 lb are used in a beam that can be constructed as shown in Case I or Case II. If the nails are spaced at 9 in determine the largest vertical shear that can be supported.

