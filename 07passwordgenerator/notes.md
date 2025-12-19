# IMP
-----------------------------------------------------------------------

## useRef
-------------------------------------------
# useRef is actually used to store the reference of html element 

# useRef is simply a object where we has access of .current

# useState is responsible for re-rendering of that particular DOM element but useRef does not rerenders that element no matters how many changes you are doing in that particular element


## useCallback
----------------------------------------------
# what happens in useCallback here suppose if we want some information again and again so what we do , we store that information in temporary storage and if we need that information again then we dont perform those complex operations again else we collect those information from temporary storage and thus here we are optimizing the approach 


## useEffect
----------------------------------------------
# It is depend upon dependency array

# when dependency array empty => then component will render only once after reloading ,refresh,when first time it appears on screen

# when something is there inn dependency array then component will render when those whenever there is change in the state mentioned in the dependency array