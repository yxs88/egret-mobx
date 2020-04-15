declare module mm {
    /**---------------------------------------------------------------------------
     * --------------------------以下为mm模块导入时已赋值---------------------------
     * ---------------------------------------------------------------------------
     */
    export const mobx: {
        IObservable;
        IDepTreeNode;
        Reaction;
        IReactionPublic;
        IReactionDisposer;
        IDerivation;
        untracked;
        IDerivationState;
        IAtom;
        createAtom;
        IAction;
        spy;
        IComputedValue;
        IEqualsComparer;
        comparer;
        IEnhancer;
        IInterceptable;
        IInterceptor;
        IListenable;
        IObjectWillChange;
        IObjectDidChange;
        IObservableObject;
        isObservableObject;
        IValueDidChange;
        IValueWillChange;
        IObservableValue;
        isBoxedObservable;
        IObservableArray;
        IArrayWillChange;
        IArrayWillSplice;
        IArrayChange;
        IArraySplice;
        isObservableArray;
        IKeyValueMap;
        ObservableMap;
        IMapEntries;
        IMapEntry;
        IMapWillChange;
        IMapDidChange;
        isObservableMap;
        IObservableMapInitialValues;
        ObservableSet;
        isObservableSet;
        ISetDidChange;
        ISetWillChange;
        IObservableSetInitialValues;
        transaction;
        observable;
        IObservableFactory;
        IObservableFactories;
        computed;
        IComputed;
        isObservable;
        isObservableProp;
        isComputed;
        isComputedProp;
        extendObservable;
        observe;
        intercept;
        autorun;
        IAutorunOptions;
        reaction;
        IReactionOptions;
        when;
        IWhenOptions;
        action;
        isAction;
        runInAction;
        IActionFactory;
        keys;
        values;
        entries;
        set;
        remove;
        has;
        get;
        decorate;
        configure;
        onBecomeObserved;
        onBecomeUnobserved;
        flow;
        FlowCancellationError;
        isFlowCancellationError;
        toJS;
        trace;
        IObserverTree;
        IDependencyTree;
        getDependencyTree;
        getObserverTree;
        _resetGlobalState;
        _getGlobalState;
        getDebugName;
        getAtom;
        _getAdministration;
        _allowStateChanges;
        _allowStateChangesInsideComputed;
        Lambda;
        isArrayLike;
        $mobx;
        _isComputingDerivation;
        onReactionError;
        _interceptReads;
        IComputedValueOptions;
        IActionRunInfo;
        _startAction;
        _endAction;
        _allowStateReadsStart;
        _allowStateReadsEnd;
    };

    export const Observer: any;
    export const react: any;
}
