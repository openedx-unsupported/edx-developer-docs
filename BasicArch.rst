====
Architecture Overview
====

Goals of this Document
--------
The goal of this document is to explain the edX architecture at a system level. It is not comprehensive, but the hope is that this is enough foundational understanding to give you the big picture and give enough context so the rest of the documentation is understandable.  More specifically, this document outlines the roles and responsibilities of each of the major services and demonstrates how data flows through the edX system. 

Welcome to edX Architecture
-----
Hello! Welcome to the edX architectural overview!  
Allow me to introduce Xsy, they are the edX mascot!

.. image:: doc-images/Xsy.png
   :width: 100pt
   :alt: Xsy is a smiling letter X with a graduation cap, they are very excited about learning!
   :align: center

Now let's take a look at Xsy's underlying structure:

.. image:: doc-images/xsy-and-diagram.png
   :alt: Xsy overlaid with a diagram of how our services communicate with each other
   :align: center
   :width: 500pt

How Does Data Flow Through the edX System
------
Below is a diagram of the ways in which data flows through our system