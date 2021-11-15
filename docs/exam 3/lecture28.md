## AE333
## Mechanics of Materials
Lecture 20 - Superposition<br/>
Dr. Nicholas Smith<br/>
Wichita State University, Department of Aerospace Engineering

15 November, 2021

----
## schedule

- 15 Nov - Beam Deflection (superposition)
- 17 Nov - Exam 3 Review
- 19 Nov - HW 9 Due, HW 8 Self-grade Due
- 22 Nov - Exam 3
- (24 Nov) - No Class Thanksgiving Break
- 29 Nov - Buckling, Stress Concentration
- 1 Dec - Final Exam Review
- 3 Dec - Project 3 Due, HW 10 & HW 9 Self-grade Due
- 6 Dec - Final Exam 11:00 - 12:50


----
## outline

<!-- vim-markdown-toc GFM -->

* superposition
* statically indeterminate

<!-- vim-markdown-toc -->

---
# superposition

----
## superposition

-   The differential equation `$EI \frac{d^4v}{dx^4} = w(x) $` satisfies the requirements for superposition
-   `$w(x)$` is linearly related to `$v(x)$`
-   Load does not significantly change the shape of the beam

----
## superposition

-   This means we can superpose multiple deflection solutions from simpler cases
-   Appendix C in the text has many solutions that can be superposed

----
## example 12.13

![](../images/example-12-13.jpg)

Use superposition to find the displacement at C and the slope at A

----
## example 12.15

![](../images/example-12-15.jpg)

Use superposition to find the displacement at C

----
## example 12.16

![](../images/example-12-16.jpg)

The steel bar is supported by springs with k=15 kip/ft originally unstretched. For the force shown, determine the displacement at C. Take $E_{st}=29$ Msi and $I=12\text{ in}^4$.

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

