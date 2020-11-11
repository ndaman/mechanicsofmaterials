# coding: utf-8
import sympy as sm
w, x, a, b, mb, c1, c2 = sm.symbols('w x A B M_B C_1 C_2')
l = sm.Symbol('L', positive=True)
e1 = a+b-w*l
e2 = 2*a*l/3 - w*l**2/2 - mb
v = -w*x**4/24 + a/6*sm.SingularityFunction(x,l/3,3) + c1*x + c2
vp = sm.diff(v,x)
e3 = v.subs(x,l/3)
e4 = v.subs(x,l)
e5 = vp.subs(x,l)
ans = sm.solve([e1,e2,e3,e4,e5],[a, b, mb, c1, c2])
vans = v.subs(ans)
ans
