> Collections


This class consists exclusively of static methods that operate on or return collections. It contains polymorphic algorithms that operate on collections, "wrappers", which return a new collection backed by a specified collection, and a few other odds and ends.
The methods of this class all throw a NullPointerException if the collections or class objects provided to them are null.
The documentation for the polymorphic algorithms contained in this class generally includes a brief description of the implementation. Such descriptions should be regarded as implementation notes, rather than parts of the specification. Implementors should feel free to substitute other algorithms, so long as the specification itself is adhered to. (For example, the algorithm used by sort does not have to be a mergesort, but it does have to be stable.)
The "destructive" algorithms contained in this class, that is, the algorithms that modify the collection on which they operate, are specified to throw UnsupportedOperationException if the collection does not support the appropriate mutation primitive(s), such as the set method. These algorithms may, but are not required to, throw this exception if an invocation would have no effect on the collection. For example, invoking the sort method on an unmodifiable list that is already sorted may or may not throw UnsupportedOperationException.
