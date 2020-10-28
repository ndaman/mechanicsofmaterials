## AE333
## Mechanics of Materials
Lecture 21 - Statically indeterminate beams<br/>
Dr. Nicholas Smith<br/>
Wichita State University, Department of Aerospace Engineering

3 November, 2020

----
## schedule

- 3 Nov - Statically Indeterminate Beams, HW 9 Due, HW 8 Self-Grade Due
- 5 Nov - Statically Indeterminate Beams
- 10 Nov - Exam 3 Review, HW 10 Due, HW 9 Self-Grade Due
- 12 Nov - Exam 3 
- 17 Nov - Stress Concentration
- 19 Nov - Buckling
- 20 Nov - Project 3 Due
- 1 Dec - Bucking, Final Review
- 3 Dec - Final Review, Problem Solving, HW 11 Due

----
## outline

<!-- vim-markdown-toc GFM -->

* statically indeterminate beams
* indeterminate beams - superposition
* group problems

<!-- vim-markdown-toc -->

---
# statically indeterminate beams

----
## statically indeterminate

-   If we have redundant supports, we can have some difficulty finding the displacement
-   There are several approaches to solve these problems, we will consider direct integration and superposition

----
## integration

-   We can take the extra unknowns and include them in our formulation for *M*(*x*)
-   They will be solved for with the extra boundary conditions applied

----
## example 12.17

![](../images/example-12-17.jpg)

----
## example 12.18

![](../images/example-12-18.jpg)

---
# indeterminate beams - superposition

----
## superposition

-   To use superposition for finding deflection of statically indeterminate beams, we must first identify redundant reactions
-   We initially remove these, then superpose them back such that the deflection at that point is 0
-   The choice of which reaction(s) is redundant is arbitrary, we can choose whatever we are most comfortable with
-   We use Appendix C to find deflection and slope

----
## superposition

![](../images/indeterminate-deflection.jpg)

We can consider any reaction to be redundant.

----
## higher order indeterminacy

![](../images/higher-order.jpg)

We need to treat each reaction separately to match Appendix C.

----
## example 12.22

![](../images/example-12-22.jpg)

Determine the moment at B.

---
# group problems

----
## group one

![](../images/group-12-4.png)

Determine the reactions at A and B (EI is constant).

----
## group two

![](../images/group-12-5.png)

Determine the reactions at A and B (EI is constant).

----
## group three

![](../images/group-12-6.png)

Determine the reactions at A and B. The support at B settles 2 mm. *E* = 200 GPa, *I* = 65.0(10<sup>-6</sup>)m <sup>4</sup>.

