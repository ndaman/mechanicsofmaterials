## AE333
## Mechanics of Materials
Lecture 33 - Stress Concentration<br/>
Dr. Nicholas Smith<br/>
Wichita State University, Department of Aerospace Engineering

4 May, 2020

----

## schedule

- 4 May - Stress Concentration
- 6 May - Buckling, Exam 3b Due
- 8 May - Review, HW 11 Due, Final Project Portion assigned

----
## outline

<!-- vim-markdown-toc GFM -->

* stress concentration factors

<!-- vim-markdown-toc -->

---
# stress concentration factors

----
## stress concentration

-   Our textbook splits the idea of concentration factors across multiple chapters
-   4.7, 5.8, 6.9
-   The basic idea of a stress concentration factor is that some geometry causes the maximum stress to be greater than the ’nominal’ stress

----
## stress concentration

-   Stress concentrations occur when there is a sudden change in cross-sectional area
-   Features such as holes and fillets will have a stress concentration factor

$$K = \\frac{\\sigma\_{max}}{\\sigma\_{avg}}$$

----
## stress concentration

-   The exact value of the stress concentration factor can be derived for simple shapes, but in practice it is usually looked up on a chart or figure
-   The value of *K* depends on the ratio of the radius and depth of the feature relative to the total object depth

----
## fillets

![](../images/stress-concentration-fillet.jpg) <!-- .element width="50%" -->

----
## holes

![](../images/stress-concentration-hole.jpg) <!-- .element width="50%" -->

----
## example

![](../images/stress-concentration-example.jpg)   <!-- .element width="50%" -->
If `$\sigma_{allow}=120 $` MPa, find the maximum axial force, P.

----
## stress concentration in torsion

-   We can also have stress concentration in torsion
-   For circular shafts, this is usually around a filleted shaft as shown in the next slide
-   The maximum shear can be found with

$$\\tau\_{max} = K \\frac{Tc}{J}$$

----
## fillet

![](../images/stress-concentration-torsion.jpg) <!-- .element width="50%" -->

----
## example 5.14

![](../images/example-5-14.jpg) <!-- .element width="50%" -->


Determine the maximum stress in the shaft due to the applied torques. The shoulder fillet has a radius of r=6 mm

----
## beams

-   We can also have a stress concentration in a beam
-   The maximum stress can be found with

$$\\sigma\_{max} = K \\frac{Mc}{I}$$

----
## fillet

![](../images/beam-fillet.jpg) <!-- .element width="50%" -->

----
## notch

![](../images/beam-notch.jpg) <!-- .element width="50%" -->

----
## example 6.20

![](../images/example-6-20.jpg) <!-- .element width="50%" -->

Determine the maximum normal stress for a steel bar with a shoulder fillet as shown.
