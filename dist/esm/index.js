import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=React,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
	function q(c,a,g){var b,d={},e=null,h=null;undefined!==g&&(e=""+g);undefined!==a.key&&(e=""+a.key);undefined!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) undefined===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React$1 = React;

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = undefined; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self) ;
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	var didWarnAboutKeySpread = {};
	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum();

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    {
	      if (hasOwnProperty.call(props, 'key')) {
	        var componentName = getComponentNameFromType(type);
	        var keys = Object.keys(props).filter(function (k) {
	          return k !== 'key';
	        });
	        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

	        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
	          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

	          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

	          didWarnAboutKeySpread[componentName + beforeExample] = true;
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

if (process.env.NODE_ENV === 'production') {
  jsxRuntime.exports = requireReactJsxRuntime_production_min();
} else {
  jsxRuntime.exports = requireReactJsxRuntime_development();
}

var jsxRuntimeExports = jsxRuntime.exports;

function styleInject(css, ref) {
  if ( ref === undefined ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$a = "button {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  text-align: center;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n\nbutton:hover {\n  box-shadow:\n    0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  filter: brightness(1.25);\n}\n\nbutton:disabled {\n  background-color: #737373;\n  border-color: #737373;\n  color: #e5e5e5;\n  cursor: not-allowed;\n}\n";
styleInject(css_248z$a);

const Button = ({ variant, ...props }) => {
    const styles = () => {
        const propStyle = props.style ?? {};
        if (props.disabled)
            return propStyle;
        if (variant === "primary")
            return {
                borderColor: "#6366F1",
                backgroundColor: "#6366F1",
                color: "#FAFAFA",
                ...propStyle,
            };
        if (variant === "secondary")
            return {
                borderColor: "#6366F1",
                backgroundColor: "#FAFAFA",
                color: "#6366F1",
                ...propStyle,
            };
        return propStyle;
    };
    return (jsxRuntimeExports.jsx("button", { ...props, style: styles(), children: props.children }));
};

var css_248z$9 = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:wght@300;400;500;600;700&display=swap\");\n\n.switch-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 50px;\n  font-family: \"Montserrat\", serif;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 24px;\n  height: 10px;\n  margin-left: 11px; /* Space for the label */\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #e9e9e9;\n  transition: 0.4s;\n  border-radius: 20px;\n  height: 6px;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 10px;\n  width: 10px;\n  left: 0px;\n  top: -2px;\n  bottom: 3px;\n  background-color: #e31837;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\ninput:checked + .slider {\n  background-color: #e9e9e9;\n  height: 6px;\n  border-radius: 10px;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(14px);\n}\n\ninput:disabled + .slider {\n  background-color: #e6e6e6;\n  cursor: not-allowed;\n}\n\n.slider.disabled {\n  cursor: not-allowed;\n}\n\n.switch-label {\n  font-size: 14px;\n  color: #242424;\n}\n\n.switch-label.disabled-label {\n  color: #a9a9a9;\n  cursor: not-allowed;\n}\n.small {\n  font-size: 14px;\n}\n\n.medium {\n  font-size: 16px;\n}\n.large {\n  font-size: 18px;\n}\n.extra-large {\n  font-size: 20px;\n}\n.semi-bold {\n  font-weight: 600;\n}\n.bold {\n  font-weight: 700;\n}\n.extra-bold {\n  font-weight: 800;\n}\n\n@media (max-width: 600px) {\n  .switch-label {\n    display: none;\n  }\n  .switch-container {\n    margin-right: 10px;\n  }\n}\n";
styleInject(css_248z$9);

const defaultThemes = {
    light: {
        hc_bg_color: "#FFFFFF",
        hc_border: "1px solid #E0E0E0",
        hc_primary_font_color: "#242424",
        hc_secondary_font_color: "#ACACAC",
        hb_bg_color: "#F9F9F9",
        hc_active_color: "rgb(0, 61, 121)",
        hc_active_bg_color: "rgba(0, 61, 121, 0.1)",
        cc_bg_color: "#FFF",
        cc_border: "1px solid #E0E0E0",
        cc_primary_font_color: "#242424",
        cc_secondary_font_color: "#ACACAC",
        cb_bg_color: "#FBFBFB",
        primary_color: "#E31837",
        scroll_bar_color: "#BDBDBD",
        main_container_bg: "#fff",
        cc_msg_bg: "#FFF",
        cb_input_bg_color: "#fff",
        cb_input_border_color: "#E9E9E9",
        font_color: "#242424",
        send_btn_bg: "#E31837",
        profile_bg_color: "#fff",
        profile_font_color: "#E31837",
        primary_font_color: "#242424",
        modal_main_bg: "rgba(255, 255, 255, 0.7)",
        btn_bg_color: "#E31837",
        btn_icon_color: "#fff",
        accessibility_btn_bg: "#FFF",
        accessibility_icon_color: "#242424",
    },
    dark: {
        hc_bg_color: "#313131",
        hc_border: "1px  solid #444444",
        hc_primary_font_color: "#FFFFFF",
        hc_secondary_font_color: "#FFFFFF",
        hb_bg_color: "#242424",
        hc_active_color: "#fff",
        hc_active_bg_color: "#003D79",
        cc_bg_color: "#313131",
        cc_border: "1px solid #444444",
        cc_primary_font_color: "#FFFFFF",
        cc_secondary_font_color: "#ACACAC",
        cb_bg_color: "#242424",
        primary_color: "#FFF",
        scroll_bar_color: "#444444",
        main_container_bg: "#313131",
        cc_msg_bg: "#313131",
        cb_input_bg_color: "#313131",
        cb_input_border_color: "#535353",
        font_color: "#fff",
        send_btn_bg: "#E31837",
        profile_bg_color: "#E31837",
        profile_font_color: "#fff",
        primary_font_color: "#FFF",
        modal_main_bg: "rgba(0, 0, 0, 0.7)",
        btn_bg_color: "#E31837",
        btn_icon_color: "#fff",
        accessibility_btn_bg: "#313131",
        accessibility_icon_color: "#FFF",
    },
};

const ThemeContext = createContext({
    theme: "light",
    fontSize: "medium",
    contrast: "semi-bold",
    themes: defaultThemes,
    setTheme: () => { },
    setFontSize: () => { },
    setContrast: () => { },
});
const ThemeProvider = ({ children, customThemes, }) => {
    const [theme, setTheme] = useState("light");
    const [fontSize, setFontSize] = useState("small");
    const [contrast, setContrast] = useState("semi-bold");
    const mergedThemes = {
        ...defaultThemes,
        ...customThemes,
        // Override defaults with custom themes
    };
    return (jsxRuntimeExports.jsx(ThemeContext.Provider, { value: {
            theme,
            fontSize,
            contrast,
            themes: mergedThemes,
            setTheme,
            setFontSize,
            setContrast,
        }, children: children }));
};
const useTheme = () => useContext(ThemeContext);

const SwitchToggle = ({ checked = false, onChange, label, }) => {
    const handleToggle = () => {
        if (onChange) {
            onChange(!checked);
        }
    };
    const { theme, themes, fontSize, contrast } = useTheme();
    const currentTheme = themes[theme] || themes.light;
    useEffect(() => {
        const style = document.createElement("style");
        style.textContent = `
      .slider:before {
        background-color: ${currentTheme?.btn_bg_color};
      }
    `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style); // Cleanup on unmount
        };
    }, [currentTheme]);
    return (jsxRuntimeExports.jsxs("div", { className: "switch-container", children: [label && (jsxRuntimeExports.jsx("span", { className: `switch-label ${fontSize} ${contrast}`, style: {
                    color: currentTheme?.font_color,
                }, children: label })), jsxRuntimeExports.jsxs("label", { className: "switch", children: [jsxRuntimeExports.jsx("input", { type: "checkbox", checked: checked, onChange: handleToggle }), jsxRuntimeExports.jsx("span", { className: "slider" })] })] }));
};

var css_248z$8 = "/* General styles for History Card */\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:wght@300;400;500;600;700&display=swap\");\n\n.history-card-container {\n  border: 1px solid transparent;\n  border-radius: 10px;\n  padding: 10px;\n  box-shadow: 0px 3px 6px #00000014;\n  margin-bottom: 10px;\n  cursor: pointer;\n  display: flex;\n  background-color: var(--background-color);\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n  font-family: \"Montserrat\", serif;\n}\n\n.history-card-container.selected {\n  border-color: #e31837; /* Red color when selected */\n}\n\n.history-card-title {\n  font-weight: bold;\n  color: var(--font-color);\n  white-space: nowrap; /* Ensures text doesn't wrap */\n  overflow: hidden; /* Hides overflowing text */\n  text-overflow: ellipsis; /* Adds ellipsis (...) for overflowing text */\n  margin: 0;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n\n.history-card-timeStamps {\n  color: #acacac;\n  font-size: 12px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  white-space: nowrap; /* Ensures text doesn't wrap */\n  overflow: hidden; /* Prevents content overflow */\n  text-overflow: ellipsis; /* Adds ellipsis (...) for overflowing text */\n  font-weight: normal;\n}\n\n.history-card-active {\n  padding: 2px 6px;\n  background-color: rgba(0, 61, 121, 0.1);\n  color: #003d79;\n  border-radius: 10px;\n  font-size: 12px;\n  white-space: nowrap;\n}\n\np {\n  margin: 0;\n}\n\n.logo-icon {\n  margin-bottom: 30px;\n}\n.small {\n  font-size: 14px;\n}\n\n.medium {\n  font-size: 16px;\n}\n.large {\n  font-size: 18px;\n}\n.extra-large {\n  font-size: 20px;\n}\n.semi-bold {\n  font-weight: 600;\n}\n.bold {\n  font-weight: 700;\n}\n.extra-bold {\n  font-weight: 800;\n}\n";
styleInject(css_248z$8);

const HistoryCard = ({ title, timeStamps, isActive = false, isSelected, onClick, }) => {
    const { theme, themes, fontSize, contrast } = useTheme();
    const currentTheme = themes[theme] || themes.light;
    return (jsxRuntimeExports.jsxs("div", { className: `history-card-container ${isSelected ? "selected" : ""} ${fontSize}`, onClick: onClick, style: {
            backgroundColor: currentTheme?.hc_bg_color,
            borderColor: isSelected ? currentTheme?.hc_border : "",
            color: currentTheme?.hc_primary_font_color,
        }, children: [jsxRuntimeExports.jsx("h3", { className: `history-card-title ${fontSize} ${contrast}`, style: {
                    color: currentTheme?.hc_primary_font_color,
                }, children: title }), jsxRuntimeExports.jsxs("div", { className: `history-card-timeStamps ${fontSize} ${contrast}`, style: { color: currentTheme?.hc_secondary_font_color }, children: [jsxRuntimeExports.jsx("p", { children: typeof timeStamps === "string"
                            ? timeStamps
                            : timeStamps.toLocaleString() }), isActive && (jsxRuntimeExports.jsx("span", { className: `history-card-active  ${fontSize} ${contrast}`, style: {
                            backgroundColor: currentTheme?.hc_active_bg_color,
                            color: currentTheme?.hc_active_color,
                        }, children: "Active" }))] })] }));
};

var css_248z$7 = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:wght@300;400;500;600;700&display=swap\");\n\n:root {\n  --background-color: #f9f9f9;\n  --font-color: #000000;\n  --input-background-color: #ffffff;\n  --input-border-color: #f3f3f3;\n  --button-background-color: #ffffff;\n}\n\n.dark-theme {\n  --background-color: transparent;\n  --font-color: #ffffff;\n  --input-background-color: #2e2e2e;\n  --input-border-color: transparent;\n  --button-background-color: #e31837;\n}\n\n.history-box-container {\n  font-family: \"Montserrat\", serif;\n  color: var(--font-color);\n  width: 100%;\n  margin: 0 auto;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.history-box-cards {\n  overflow-y: auto;\n  max-height: calc(100vh - 295px);\n}\n.history-box-search {\n  display: flex;\n  margin-bottom: 23px;\n}\n\n.history-box-input {\n  flex: 1;\n  padding: 10px 20px;\n  border: 1px solid var(--input-border-color);\n  border-radius: 10px;\n  background-color: var(--input-background-color);\n  width: 100%;\n  max-width: 208px;\n  margin-right: 10px;\n  color: var(--font-color);\n  outline: none;\n}\n\n.history-box-button {\n  width: 40px;\n  height: 40px;\n  margin-left: 10px;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0px 3px 6px #00000014;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.logo-icon {\n  width: 100%;\n  max-width: 200px;\n}\n.new-chat-btn button {\n  background: none;\n  border: none;\n  padding: 8px 10px;\n  align-items: center;\n  justify-content: center;\n  display: none;\n}\n.new-chat-btn {\n  margin-bottom: 20px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  background-color: var(--button-background-color);\n  cursor: pointer;\n  box-shadow: 0px 3px 6px #00000014;\n}\n.small {\n  font-size: 14px;\n}\n\n.medium {\n  font-size: 16px;\n}\n.large {\n  font-size: 18px;\n}\n.extra-large {\n  font-size: 20px;\n}\n.semi-bold {\n  font-weight: 600;\n}\n.bold {\n  font-weight: 700;\n}\n.extra-bold {\n  font-weight: 800;\n}\n@media (max-width: 600px) {\n  .logo-icon {\n    display: none;\n  }\n  .history-box-cards {\n    max-height: calc(100vh - 250px);\n  }\n  .history-box-button {\n    display: none;\n  }\n  .new-chat-btn button {\n    display: flex;\n  }\n}\n";
styleInject(css_248z$7);

var css_248z$6 = ".accessibility-btn {\n  box-shadow: 0px 3px 6px #00000014;\n  border-radius: 30px;\n  background: #fff;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  margin-top: 25px;\n  position: absolute;\n  bottom: 25px;\n  font-size: 14px;\n}\n.accessibility-btn p {\n  padding-left: 10px;\n}\n.collapsed-accessibility {\n  position: absolute;\n  bottom: 25px;\n  left: 15px;\n  cursor: pointer;\n}\n.small {\n  font-size: 14px;\n}\n\n.medium {\n  font-size: 16px;\n}\n.large {\n  font-size: 18px;\n}\n.extra-large {\n  font-size: 20px;\n}\n.semi-bold {\n  font-weight: 600;\n}\n.bold {\n  font-weight: 700;\n}\n.extra-bold {\n  font-weight: 800;\n}\n";
styleInject(css_248z$6);

const AccessibilityButton = ({ icon, title = "Is this easy to read?", description = "If not, click on this box.", onAccessibilityClick, className = "", isCollapsed, }) => {
    const { theme, themes, fontSize, contrast } = useTheme();
    const currentTheme = themes[theme] || themes.light;
    const AccessibilityIcon = () => (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "40", height: "40", viewBox: "0 0 40 40", children: jsxRuntimeExports.jsx("path", { d: "M25,5A20,20,0,1,0,45,25,20.01,20.01,0,0,0,25,5ZM22.078,24A42.971,42.971,0,0,1,19.4,35.559a1.77,1.77,0,0,0,3.309,1.255A47.474,47.474,0,0,0,25,28.718a47.516,47.516,0,0,0,2.287,8.1A1.77,1.77,0,0,0,30.6,35.559a42.979,42.979,0,0,1-2.673-11.547,57.089,57.089,0,0,0,6.36-.671,1.77,1.77,0,1,0-.568-3.493,55.039,55.039,0,0,1-17.442,0,1.769,1.769,0,0,0-.547,3.5A61.39,61.39,0,0,0,22.078,24ZM25,12.684a3.194,3.194,0,1,1-3.194,3.194A3.2,3.2,0,0,1,25,12.684Z", transform: "translate(-5 -5)", fill: "#242424", fillRule: "evenodd", style: { fill: currentTheme?.accessibility_icon_color } }) }));
    return (jsxRuntimeExports.jsxs("div", { className: !isCollapsed ? `accessibility-btn` : className, onClick: onAccessibilityClick, role: "button", tabIndex: 0, style: {
            backgroundColor: currentTheme?.accessibility_btn_bg,
            color: currentTheme?.hc_primary_font_color,
        }, children: [icon || jsxRuntimeExports.jsx(AccessibilityIcon, {}), !isCollapsed && (jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("p", { className: `${fontSize} ${contrast}`, children: title }), jsxRuntimeExports.jsx("p", { className: `${fontSize} ${contrast}`, children: description })] }))] }));
};

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='21.5' height='18.5' viewBox='0 0 21.5 18.5'%3e %3cg id='Group_1478' data-name='Group 1478' transform='translate(-1.25 -2.75)'%3e %3cg id='Group_1477' data-name='Group 1477'%3e %3cpath id='Path_44' data-name='Path 44' d='M17.665%2c21.171A.75.75%2c0%2c0%2c0%2c18.75%2c20.5V18.191a4.751%2c4.751%2c0%2c0%2c0%2c4-4.691v-6A4.75%2c4.75%2c0%2c0%2c0%2c18%2c2.75H6A4.75%2c4.75%2c0%2c0%2c0%2c1.25%2c7.5v6A4.75%2c4.75%2c0%2c0%2c0%2c6%2c18.25h5.823l5.842%2c2.921ZM6.5%2c13.25h11a.75.75%2c0%2c0%2c0%2c0-1.5H6.5a.75.75%2c0%2c0%2c0%2c0%2c1.5Zm0-4h11a.75.75%2c0%2c0%2c0%2c0-1.5H6.5a.75.75%2c0%2c0%2c0%2c0%2c1.5Z' fill='%237b7b7b' fill-rule='evenodd'/%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

const HistoryBox = ({ history, onCardClick, onSearchChange, onCreateNewChat, isCollapsed, accessibilityOpen, setAccessibilityOpen, isMobile = false, setIsChatOpen, fullLogo, compactLogo, onHistoryScroll, onHistoryScrollTop, onHistoryScrollBottom, }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const scrollRef = useRef(null);
    const { theme, themes, fontSize, contrast } = useTheme();
    const currentTheme = themes[theme] || themes.light;
    const handleCardClick = (cardDetails, index) => {
        setSelectedCardIndex(index);
        if (isMobile) {
            setIsChatOpen && setIsChatOpen(true);
        }
        if (onCardClick)
            onCardClick(cardDetails);
    };
    const handleSearchTermChange = (term) => {
        setSearchTerm(term);
        if (onSearchChange)
            onSearchChange(term);
    };
    const handleScroll = (event) => {
        const container = event.currentTarget;
        if (onHistoryScroll)
            onHistoryScroll(event);
        if (container.scrollTop === 0 && onHistoryScrollTop)
            onHistoryScrollTop();
        if (container.scrollHeight - container.scrollTop === container.clientHeight &&
            onHistoryScrollBottom)
            onHistoryScrollBottom();
    };
    const PlusIcon = () => (jsxRuntimeExports.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", style: { color: currentTheme?.btn_icon_color }, children: jsxRuntimeExports.jsx("path", { d: "M12 5v14M5 12h14", stroke: "currentColor", strokeWidth: "2" }) }));
    const SearchIcon = () => (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", children: jsxRuntimeExports.jsx("path", { id: "Path_43", "data-name": "Path 43", d: "M80.145,67.329a9.062,9.062,0,1,0-1.165,13.789L82.1,84.234A1.511,1.511,0,0,0,84.234,82.1l-3.116-3.114A9.06,9.06,0,0,0,80.145,67.329ZM78.01,78.01a6.042,6.042,0,1,1,0-8.544,6.047,6.047,0,0,1,0,8.544Z", transform: "translate(-64.675 -64.675)", fill: "#242424", style: { fill: currentTheme?.hc_primary_font_color } }) }));
    return (jsxRuntimeExports.jsx("div", { className: `sidebar ${isCollapsed ? "collapsed" : ""} `, style: {
            backgroundColor: currentTheme?.hb_bg_color,
            color: currentTheme?.hc_primary_font_color,
        }, children: jsxRuntimeExports.jsxs("div", { className: `history-box-container ${theme}-theme ${fontSize}`, style: {
                color: currentTheme?.hc_primary_font_color,
                borderColor: currentTheme?.hb_border,
            }, children: [!isCollapsed ? (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("img", { className: "logo-icon", src: fullLogo, alt: "Logo" }), jsxRuntimeExports.jsx("div", { className: "new-chat-btn", children: jsxRuntimeExports.jsxs("button", { className: `${fontSize}`, style: { color: currentTheme?.primary_color }, children: [jsxRuntimeExports.jsx(PlusIcon, {}), " ", jsxRuntimeExports.jsx("span", { style: { marginLeft: "10px" }, children: "Start a new chat" })] }) }), jsxRuntimeExports.jsxs("div", { className: "history-box-search", children: [jsxRuntimeExports.jsx("input", { type: "text", className: `history-box-input ${fontSize} ${contrast}`, placeholder: "Search", value: searchTerm, onChange: (e) => handleSearchTermChange(e.target.value) }), jsxRuntimeExports.jsx("button", { className: "history-box-button", onClick: onCreateNewChat, style: { backgroundColor: currentTheme?.btn_bg_color }, children: jsxRuntimeExports.jsx(PlusIcon, {}) })] }), jsxRuntimeExports.jsx("div", { className: `history-box-cards ${fontSize}`, ref: scrollRef, onScroll: handleScroll, children: history.map((item, index) => (jsxRuntimeExports.jsx(HistoryCard, { title: item.title, timeStamps: item.timeStamps, isActive: item.isActive, isSelected: selectedCardIndex === index, onClick: () => handleCardClick(item, index) }, index))) })] })) : (jsxRuntimeExports.jsxs("div", { className: "icon-view", children: [jsxRuntimeExports.jsx("div", { className: "logo-wrapper", children: jsxRuntimeExports.jsx("img", { className: "logo", src: compactLogo, alt: "Compact Logo" }) }), jsxRuntimeExports.jsx("div", { className: "collapsed-menu", children: jsxRuntimeExports.jsx("button", { className: "history-box-button", onClick: onCreateNewChat, style: { backgroundColor: currentTheme?.btn_bg_color }, children: jsxRuntimeExports.jsx(PlusIcon, {}) }) }), jsxRuntimeExports.jsx("div", { className: "collapsed-menu", children: jsxRuntimeExports.jsx(SearchIcon, {}) }), jsxRuntimeExports.jsx("div", { className: "collapsed-menu", children: jsxRuntimeExports.jsx("img", { className: "icon", src: img, alt: "New Chat", title: "New Chat" }) })] })), !isMobile && (jsxRuntimeExports.jsx(AccessibilityButton, { isCollapsed: isCollapsed, onAccessibilityClick: () => {
                        setAccessibilityOpen && setAccessibilityOpen(!accessibilityOpen);
                    }, className: "collapsed-accessibility" }))] }) }));
};

var css_248z$5 = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:wght@300;400;500;600;700&display=swap\");\n\n:root {\n  --cc_bg_color: #fff;\n  --cc_border: 1px solid #e0e0e0;\n  --cc_primary_font_color: #242424;\n  --cc_secondary_font_color: #acacac;\n  --primary_color: #e31837;\n}\n\n.feedback-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n  box-shadow: 0px 3px 6px #00000014;\n  border: 1px solid #e9e9e9;\n  border-radius: 10px;\n  padding: 20px;\n  z-index: 1000;\n}\n.feedback-icon {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n.modal-wrapper {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 999;\n}\n.modal-content {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 500px;\n}\n.modal-content h3 {\n  margin: 0;\n}\n.title-cancel {\n  display: flex;\n  justify-content: space-between;\n}\n.modal-textarea {\n  height: 150px;\n  padding: 8px;\n  border: 1px solid #e9e9e9;\n  border-radius: 10px;\n  resize: none;\n}\n.modal-textarea:focus-visible {\n  outline: none;\n}\n.modal-submit {\n  padding: 11px 20px;\n  background-color: #e31837;\n  color: white;\n  border: none;\n  border-radius: 20px;\n  cursor: pointer;\n}\n.btn-wrapper {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.modal-close {\n  background-color: transparent;\n  color: white;\n  border: none;\n  cursor: pointer;\n}\n\n.existing-feedback {\n  margin-top: 8px;\n  font-size: 14px;\n  color: #666;\n}\n\n.chat-card-container {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  margin-bottom: 43px;\n  font-family: \"Montserrat\", serif;\n}\n\n.align-left {\n  justify-content: flex-start;\n}\n\n.align-right {\n  flex-direction: row-reverse;\n}\n\n.profile-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n}\n\n.profile-image {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n\n.profile-initials {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  font-size: 16px;\n  color: #e31837;\n  box-shadow: 0px 3px 6px #00000014;\n}\n\n.chat-box {\n  max-width: 70%;\n  background-color: transparent;\n  border-radius: 8px;\n  padding: 8px 12px;\n  box-shadow: 0px 3px 6px #00000014;\n  position: relative;\n}\n\n.chat-content {\n  display: flex;\n  flex-direction: column;\n}\n\n.chat-text {\n  margin: 0;\n  font-size: 14px;\n}\n\n.chat-timestamp {\n  font-size: 12px;\n  color: #999;\n  margin-top: 4px;\n}\n\n.feedback-star-container {\n  display: flex;\n  flex-direction: column;\n  /* margin-top: 8px; */\n}\n\n.feedback-stars {\n  display: flex;\n  gap: 4px;\n}\n\n.star svg {\n  cursor: pointer;\n  width: 15px;\n  height: 15px;\n}\n\n.star.selected svg {\n  fill: #e31837;\n}\n\n.feedback-text {\n  margin-top: 8px;\n  width: 100%;\n  font-size: 14px;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  resize: none;\n}\n\n.feedback-section {\n  display: flex;\n  padding-left: 30px;\n}\n.feedback-section label {\n  /* font-size: 10px; */\n  margin-right: 10px;\n}\n.chat {\n  list-style: none;\n  background: none;\n  margin: 0;\n  /* margin-bottom: 15px; */\n  padding-left: 0;\n}\n.chat li {\n  padding: 0.5rem;\n  overflow: hidden;\n  display: flex;\n}\n\n.self {\n  justify-content: flex-end;\n  align-items: flex-end;\n  position: relative;\n  padding-right: 20px !important;\n}\n.self .msg {\n  border-top-right-radius: 0px;\n  box-shadow: 0px 3px 6px #00000014;\n}\n.self:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  top: 8px;\n  right: 0;\n  width: 0px;\n  height: 0px;\n  border: 10px solid var(--dynamic-border-color, #fff);\n  border-right-color: transparent;\n  filter: drop-shadow(2px 1px 2px #00000014);\n  border-bottom-color: transparent;\n}\n\n.msg {\n  background: #fff;\n  min-width: 50px;\n  padding: 10px;\n  border-radius: 10px;\n  word-break: break-all;\n  box-shadow: 0px 3px 6px #00000014;\n}\n\n.other .msg {\n  order: 1;\n  border-top-left-radius: 0px;\n  box-shadow: 0px 3px 6px #00000014;\n}\n.other:before {\n  content: \"\";\n  position: relative;\n  top: 0px;\n  right: 0px;\n  left: 0;\n  width: 0px;\n  height: 0px;\n  border: 10px solid var(--dynamic-border-color, #fff);\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n  filter: drop-shadow(-2px 2px 2px #00000014);\n}\n.small {\n  font-size: 14px;\n}\n\n.medium {\n  font-size: 16px;\n}\n.large {\n  font-size: 18px;\n}\n.extra-large {\n  font-size: 20px;\n}\n.semi-bold {\n  font-weight: 600;\n}\n.bold {\n  font-weight: 700;\n}\n.extra-bold {\n  font-weight: 800;\n}\n@media (max-width: 600px) {\n  .modal-content {\n    width: 100%;\n  }\n}\n";
styleInject(css_248z$5);

var css_248z$4 = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:wght@300;400;500;600;700&display=swap\");\n\n.card-with-actions {\n  justify-content: flex-end;\n  align-items: flex-end;\n  position: relative;\n  padding-right: 20px !important;\n  max-width: 75%;\n  font-family: \"Montserrat\", serif;\n  padding-top: 0.5rem;\n}\n.card-with-actions .msg {\n  order: 1;\n  border-top-left-radius: 0px;\n  box-shadow: 0px 3px 6px #00000014;\n  margin-left: 27px;\n}\n.card-with-actions:after {\n  content: \"\";\n  position: absolute;\n  top: 0.5rem;\n  left: 7px;\n  width: 0px;\n  height: 0px;\n  border: 10px solid var(--dynamic-border-color, #fff);\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n  filter: drop-shadow(-2px 2px 2px #00000014);\n}\n.card-with-actions h3 {\n  margin: 0;\n}\n.card-actions button {\n  border: 1px solid #e9e9e9;\n  border-radius: 30px;\n  padding: 11px 20px;\n  background-color: #fff;\n  margin-right: 10px;\n  cursor: pointer;\n  margin-bottom: 10px;\n}\n.title,\n.card-subtitle {\n  margin-bottom: 20px;\n}\n";
styleInject(css_248z$4);

const CardWithActions = ({ actionCardTitle, actionCardSubtitle, actions, sessionId, handleActionCardClick, }) => {
    const { theme, themes, fontSize, contrast } = useTheme();
    const currentTheme = themes[theme] || themes.light;
    return (jsxRuntimeExports.jsx("div", { className: "card-with-actions", style: {
            "--dynamic-border-color": currentTheme?.cc_bg_color,
        }, children: jsxRuntimeExports.jsxs("div", { className: "msg", style: {
                backgroundColor: currentTheme?.cc_msg_bg,
                color: currentTheme?.cc_primary_font_color,
            }, children: [jsxRuntimeExports.jsxs("div", { className: "card-header", children: [jsxRuntimeExports.jsx("p", { className: `title ${fontSize} ${contrast}`, children: actionCardTitle }), actionCardSubtitle && (jsxRuntimeExports.jsx("p", { className: `card-subtitle ${fontSize} ${contrast}`, children: actionCardSubtitle }))] }), jsxRuntimeExports.jsx("div", { className: "card-actions", children: actions && actions.map((action, index) => (jsxRuntimeExports.jsx("button", { className: `card-action-button ${fontSize} ${contrast}`, onClick: () => handleActionCardClick &&
                            handleActionCardClick(action.label, sessionId), style: {
                            backgroundColor: currentTheme?.cc_msg_bg,
                            color: currentTheme?.cc_primary_font_color,
                        }, children: action.label }, index))) })] }) }));
};

const ChatCard = ({ type = "text", sender, text, timestamp, ratingEnabled = true, textFeedbackEnabled = true, isProfileImageRequired = false, onStarClick, feedback = "", rating = 0, chatId = "", sessionId = "", onTextFeedbackSubmit, userName, userProfileImage, aiName, aiProfileImage, handleActionCardClick, actionCardTitle, actionCardSubtitle, actions, pdfUrl, pdfUploaded, }) => {
    const [selectedStars, setSelectedStars] = useState(rating);
    const [textFeedback, setTextFeedback] = useState(feedback);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const getInitials = () => {
        if (sender === "ai") {
            return `${aiName?.[0] ?? ""}`.toUpperCase();
        }
        else {
            return `${userName?.[0] ?? ""}`.toUpperCase();
        }
    };
    const getProfileImage = () => {
        if (sender === "ai") {
            return aiProfileImage;
        }
        else {
            return userProfileImage;
        }
    };
    const { theme, themes, fontSize, contrast } = useTheme();
    const currentTheme = themes[theme] || themes.light;
    const CancelIcon = () => (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "15.001", viewBox: "0 0 15 15.001", children: jsxRuntimeExports.jsx("path", { id: "Union_19", "data-name": "Union 19", d: "M9290.113,15a.872.872,0,0,1-.627-.26L9283.5,8.754l-5.982,5.985a.9.9,0,0,1-.627.26.887.887,0,0,1-.629-1.514l5.982-5.985-5.982-5.984a.888.888,0,1,1,1.256-1.255l5.982,5.985L9289.486.26a.886.886,0,0,1,1.252,1.254L9284.752,7.5l5.986,5.987a.887.887,0,0,1-.625,1.514Z", transform: "translate(-9275.998)", style: { fill: currentTheme?.font_color } }) }));
    const PDFIcon = () => (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30.108", height: "40", viewBox: "0 0 30.108 40", children: jsxRuntimeExports.jsxs("g", { id: "Group_1508", "data-name": "Group 1508", transform: "translate(-525 -641)", children: [jsxRuntimeExports.jsx("path", { id: "Path_6207", "data-name": "Path 6207", d: "M51.077,58h-20.2a4.954,4.954,0,0,1-4.951-4.951v-30.1A4.954,4.954,0,0,1,30.873,18H44.329a4.92,4.92,0,0,1,3.5,1.45l6.75,6.75a4.895,4.895,0,0,1,1.45,3.5V53.049A4.954,4.954,0,0,1,51.079,58ZM30.863,20.9a2.052,2.052,0,0,0-2.051,2.051v30.1A2.052,2.052,0,0,0,30.863,55.1h20.2a2.052,2.052,0,0,0,2.051-2.051V29.7a2.033,2.033,0,0,0-.6-1.45l-6.75-6.75a2.033,2.033,0,0,0-1.45-.6H30.86Z", transform: "translate(499.078 623)", fill: "#242424", style: { fill: currentTheme?.accessibility_icon_color } }), jsxRuntimeExports.jsx("path", { id: "Path_6208", "data-name": "Path 6208", d: "M.664,0V-5.6H3.208a3.55,3.55,0,0,1,1.608.348A2.657,2.657,0,0,1,5.9-4.28,2.724,2.724,0,0,1,6.3-2.8,2.73,2.73,0,0,1,5.9-1.324a2.647,2.647,0,0,1-1.088.976A3.55,3.55,0,0,1,3.208,0Zm1.3-1.064H3.144a2.1,2.1,0,0,0,.972-.212,1.538,1.538,0,0,0,.64-.6,1.8,1.8,0,0,0,.228-.92,1.792,1.792,0,0,0-.228-.924,1.545,1.545,0,0,0-.64-.6,2.1,2.1,0,0,0-.972-.212H1.96ZM9.992.1A3.406,3.406,0,0,1,8.764-.12a2.906,2.906,0,0,1-.976-.608,2.774,2.774,0,0,1-.64-.92A2.875,2.875,0,0,1,6.92-2.8a2.875,2.875,0,0,1,.228-1.152,2.747,2.747,0,0,1,.644-.92,2.959,2.959,0,0,1,.976-.608A3.351,3.351,0,0,1,9.984-5.7a3.342,3.342,0,0,1,1.22.216,2.923,2.923,0,0,1,.968.608,2.837,2.837,0,0,1,.644.916A2.824,2.824,0,0,1,13.048-2.8a2.86,2.86,0,0,1-.232,1.156,2.77,2.77,0,0,1-.644.92,2.957,2.957,0,0,1-.968.6A3.319,3.319,0,0,1,9.992.1Zm-.008-1.1a1.826,1.826,0,0,0,.692-.128,1.659,1.659,0,0,0,.556-.368,1.681,1.681,0,0,0,.372-.568,1.934,1.934,0,0,0,.132-.728,1.934,1.934,0,0,0-.132-.728,1.711,1.711,0,0,0-.368-.568,1.608,1.608,0,0,0-.556-.368,1.857,1.857,0,0,0-.7-.128,1.826,1.826,0,0,0-.692.128,1.659,1.659,0,0,0-.556.368,1.681,1.681,0,0,0-.372.568,1.934,1.934,0,0,0-.132.728,1.942,1.942,0,0,0,.132.724,1.7,1.7,0,0,0,.368.572,1.608,1.608,0,0,0,.556.368A1.857,1.857,0,0,0,9.984-1.008ZM16.7.1a3.352,3.352,0,0,1-1.2-.212,2.828,2.828,0,0,1-.964-.6,2.8,2.8,0,0,1-.636-.92,2.9,2.9,0,0,1-.228-1.16A2.9,2.9,0,0,1,13.9-3.96a2.774,2.774,0,0,1,.64-.92,2.88,2.88,0,0,1,.964-.6A3.342,3.342,0,0,1,16.712-5.7a3.309,3.309,0,0,1,1.316.252,2.564,2.564,0,0,1,.988.74l-.832.768a1.947,1.947,0,0,0-.64-.492,1.8,1.8,0,0,0-.768-.164,1.964,1.964,0,0,0-.72.128,1.632,1.632,0,0,0-.568.368,1.681,1.681,0,0,0-.372.568,1.934,1.934,0,0,0-.132.728,1.934,1.934,0,0,0,.132.728,1.681,1.681,0,0,0,.372.568,1.632,1.632,0,0,0,.568.368,1.964,1.964,0,0,0,.72.128,1.8,1.8,0,0,0,.768-.164,1.9,1.9,0,0,0,.64-.5l.832.768a2.6,2.6,0,0,1-.988.744A3.285,3.285,0,0,1,16.7.1Z", transform: "translate(530.336 666)", fill: "#242424", style: { fill: currentTheme?.accessibility_icon_color } })] }) }));
    return (jsxRuntimeExports.jsxs("div", { className: `chat-card-container ${sender === "ai" ? "align-left" : "align-right"} ${fontSize} ${contrast}`, children: [isProfileImageRequired && (jsxRuntimeExports.jsx("div", { className: "profile-wrapper", children: getProfileImage() ? (jsxRuntimeExports.jsx("img", { src: getProfileImage(), alt: "Profile", className: "profile-image" })) : (jsxRuntimeExports.jsx("div", { className: `profile-initials ${fontSize} ${contrast}`, children: getInitials() })) })), type === "text" ? (jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("ol", { className: "chat", children: jsxRuntimeExports.jsx("li", { className: `${sender === "ai" ? "other" : "self"}`, style: {
                                "--dynamic-border-color": currentTheme?.cc_bg_color,
                            }, children: jsxRuntimeExports.jsxs("div", { className: `msg ${fontSize} ${contrast}`, style: {
                                    backgroundColor: currentTheme?.cc_msg_bg,
                                    color: currentTheme?.cc_primary_font_color,
                                }, children: [jsxRuntimeExports.jsx("p", { className: `chat-text ${fontSize} ${contrast}`, children: text }), jsxRuntimeExports.jsx("p", { className: `chat-timestamp ${fontSize} ${contrast}`, children: timestamp })] }) }) }), jsxRuntimeExports.jsxs("div", { className: "feedback-section", style: {
                            color: currentTheme?.cc_primary_font_color,
                        }, children: [ratingEnabled && sender === "ai" && (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("label", { className: `${fontSize} ${contrast}`, children: "Rate this response" }), jsxRuntimeExports.jsx("div", { className: "feedback-star-container", children: jsxRuntimeExports.jsx("div", { className: "feedback-stars", children: [1, 2, 3, 4, 5].map((star) => (jsxRuntimeExports.jsx("span", { className: `star ${selectedStars && selectedStars >= star
                                                    ? "selected"
                                                    : ""}`, onClick: () => {
                                                    setSelectedStars(star);
                                                    onStarClick && onStarClick(star, chatId, sessionId);
                                                }, children: selectedStars && selectedStars >= star ? (
                                                // SVG for selected star
                                                jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "10.445", height: "10", viewBox: "0 0 10.445 10", children: jsxRuntimeExports.jsx("path", { id: "Path_51", "data-name": "Path 51", d: "M14.244,10.438a.746.746,0,0,0-.411-1.229l-2.4-.522a.53.53,0,0,1-.343-.254L9.858,6.314a0,0,0,0,0,0,0,.758.758,0,0,0-1.3,0L7.329,8.431a.522.522,0,0,1-.342.254l-2.4.524a.745.745,0,0,0-.407,1.231l1.636,1.836a.514.514,0,0,1,.133.4L5.707,15.11a.749.749,0,0,0,.739.839.774.774,0,0,0,.305-.065l2.254-.993a.461.461,0,0,1,.417,0l2.252.992a.746.746,0,0,0,1.043-.771l-.241-2.437a.512.512,0,0,1,.133-.4Z", transform: "translate(-3.987 -5.949)", style: {
                                                            fill: currentTheme?.btn_bg_color,
                                                        } }) })) : (
                                                // SVG for unselected star
                                                jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "11.445", height: "11", viewBox: "0 0 11.445 11", children: jsxRuntimeExports.jsx("path", { id: "Path_54_-_Outline", "data-name": "Path 54 - Outline", d: "M9.21,5.449a1.246,1.246,0,0,1,.886.363h.261v.366l1.166,2a.031.031,0,0,0,.022.018l2.4.523a1.265,1.265,0,0,1,.923.822l.006.017a1.266,1.266,0,0,1-.25,1.2l-.008.009-1.635,1.838-.008.01s0,.006,0,.016l.24,2.426a1.233,1.233,0,0,1-.486,1.134l-.018.014a1.24,1.24,0,0,1-1.237.133l-2.261-1-.005,0-2.254.993a1.275,1.275,0,0,1-.507.107,1.245,1.245,0,0,1-.728-.238L5.7,16.2a1.238,1.238,0,0,1-.491-1.14l.24-2.425a.076.076,0,0,0,0-.016l-.006-.007L3.8,10.764a1.264,1.264,0,0,1-.254-1.2l.006-.017a1.267,1.267,0,0,1,.923-.825l.007,0,2.4-.524s.007,0,.016-.016L8.134,6.055A1.247,1.247,0,0,1,9.21,5.449ZM9.445,6.6l-.017-.029a.239.239,0,0,0-.218-.12.242.242,0,0,0-.218.12L7.761,8.683a1.021,1.021,0,0,1-.664.49L4.7,9.7a.262.262,0,0,0-.2.175.267.267,0,0,0,.061.242l1.632,1.831a1.015,1.015,0,0,1,.259.761v.016L6.2,15.165a.248.248,0,0,0,.35.26l2.247-.99a.964.964,0,0,1,.831,0l2.243.988a.241.241,0,0,0,.244-.024.238.238,0,0,0,.1-.234v-.006l-.242-2.449a1.014,1.014,0,0,1,.26-.771l1.627-1.83a.268.268,0,0,0,.058-.244.264.264,0,0,0-.2-.172l-2.4-.523a1.031,1.031,0,0,1-.661-.488Z", transform: "translate(-3.487 -5.449)", style: {
                                                            fill: currentTheme?.btn_bg_color,
                                                        } }) })) }, star))) }) })] })), textFeedbackEnabled && sender === "ai" && (jsxRuntimeExports.jsx("button", { className: "feedback-icon", onClick: () => setIsModalOpen(true), children: jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "23.455", height: "16.707", viewBox: "0 0 23.455 16.707", children: jsxRuntimeExports.jsx("path", { id: "Path_6226_-_Outline", "data-name": "Path 6226 - Outline", d: "M5.609,17.769h16.23a3.617,3.617,0,0,1,3.616,3.609v4.877a3.619,3.619,0,0,1-3.616,3.616H10.49L5.885,34.476V29.871H5.609A3.617,3.617,0,0,1,2,26.255V21.378A3.613,3.613,0,0,1,5.609,17.769Zm16.23,11.1a2.619,2.619,0,0,0,2.616-2.616V21.378a2.615,2.615,0,0,0-2.616-2.609H5.609A2.612,2.612,0,0,0,3,21.378v4.877a2.615,2.615,0,0,0,2.609,2.616H6.885v3.191l3.191-3.191Z", transform: "translate(-2 -17.769)", fill: "#e31837", style: { fill: currentTheme?.btn_bg_color } }) }) }))] })] })) : type === "actionCard" ? (jsxRuntimeExports.jsx(CardWithActions, { actionCardTitle: actionCardTitle, actionCardSubtitle: actionCardSubtitle, actions: actions, sessionId: sessionId, handleActionCardClick: handleActionCardClick })) : (jsxRuntimeExports.jsx("div", { children: jsxRuntimeExports.jsx("ol", { className: "chat", children: jsxRuntimeExports.jsx("li", { className: "self", style: {
                            "--dynamic-border-color": currentTheme?.cc_bg_color,
                        }, children: jsxRuntimeExports.jsxs("div", { className: `msg ${fontSize} ${contrast}`, style: {
                                backgroundColor: currentTheme?.cc_msg_bg,
                                color: currentTheme?.cc_primary_font_color,
                            }, children: [jsxRuntimeExports.jsx("div", { style: {
                                        backgroundColor: currentTheme?.cc_msg_bg,
                                        color: currentTheme?.cc_primary_font_color,
                                        padding: "10px 40px",
                                        margin: "auto",
                                        cursor: "pointer",
                                    }, onClick: () => {
                                        if (pdfUrl) {
                                            const link = document.createElement("a");
                                            link.href = pdfUrl;
                                            link.download = pdfUrl.split("/").pop() || "download.pdf";
                                            link.click();
                                        }
                                    }, children: jsxRuntimeExports.jsx(PDFIcon, {}) }), jsxRuntimeExports.jsx("p", { className: `chat-text ${fontSize} ${contrast}`, style: { textAlign: "center" }, children: pdfUploaded ? "Success" : "Error" }), jsxRuntimeExports.jsx("p", { className: `chat-timestamp ${fontSize} ${contrast}`, children: timestamp })] }) }) }) })), isModalOpen && (jsxRuntimeExports.jsx("div", { className: "modal-wrapper", style: { backgroundColor: currentTheme?.modal_main_bg }, children: jsxRuntimeExports.jsx("div", { className: "feedback-modal", style: {
                        borderColor: currentTheme?.cb_input_border_color,
                        backgroundColor: currentTheme?.main_container_bg,
                        color: currentTheme?.font_color,
                    }, children: jsxRuntimeExports.jsxs("div", { className: "modal-content", children: [jsxRuntimeExports.jsxs("div", { className: "title-cancel", children: [jsxRuntimeExports.jsx("h3", { className: `${fontSize} ${contrast}`, children: "Comment on the response" }), jsxRuntimeExports.jsx("button", { className: "modal-close", onClick: () => setIsModalOpen(false), children: jsxRuntimeExports.jsx(CancelIcon, {}) })] }), jsxRuntimeExports.jsx("textarea", { className: `modal-textarea ${fontSize} ${contrast}`, placeholder: "Write your feedback...", value: textFeedback, onChange: (e) => setTextFeedback(e.target.value), style: {
                                    backgroundColor: currentTheme?.main_container_bg,
                                    borderColor: currentTheme?.cb_input_border_color,
                                } }), jsxRuntimeExports.jsx("div", { className: "btn-wrapper", children: jsxRuntimeExports.jsx("button", { className: `modal-submit ${fontSize} ${contrast}`, onClick: () => {
                                        setIsModalOpen(false);
                                        onTextFeedbackSubmit &&
                                            onTextFeedbackSubmit(textFeedback, chatId, sessionId);
                                    }, children: "Save" }) })] }) }) }))] }));
};

var css_248z$3 = "/* :root {\n  --cb-bg-color: #fbfbfb;\n  --cb-font-color: #242424;\n  --cb-input-bg-color: #ffffff;\n  --cb-input-border-color: #e9e9e9;\n  --cb-button-bg-color: #e31837;\n  --cb-disabled-button-bg-color: lightgray;\n  --scrollbar-color: #bdbdbd;\n}\n\n.dark-theme {\n  --cb-bg-color: #242424;\n  --cb-font-color: #ffffff;\n  --cb-input-bg-color: #2e2e2e;\n  --cb-input-border-color: #555555;\n  --cb-button-bg-color: #333333;\n  --cb-disabled-button-bg-color: #555555;\n  --scrollbar-color: #444444;\n} */\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:wght@300;400;500;600;700&display=swap\");\n\n.chat-box-container {\n  display: flex;\n  flex-direction: column;\n  border-radius: 20px;\n  height: calc(100vh - 170px);\n  overflow: hidden;\n  margin: 0 30px;\n  margin-bottom: 20px;\n  background-color: var(--cb-bg-color);\n  padding: 30px 20px 20px 30px;\n  font-family: \"Montserrat\", serif;\n}\n\n.chat-box-messages {\n  flex-grow: 1;\n  overflow-y: auto;\n  color: var(--cb-font-color);\n}\n\n.chat-box-messages::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n.chat-box-messages::-webkit-scrollbar-thumb {\n  background-color: var(--scrollbar-color);\n  border-radius: 20px;\n  border: 2px solid var(--cb-bg-color);\n}\n\n.chat-box-messages::-webkit-scrollbar-track {\n  background: var(--cb-bg-color);\n  border-radius: 5px;\n}\n\n.chat-box-input-area {\n  display: flex;\n  align-items: center;\n  padding-top: 8px;\n  background-color: transparent;\n}\n\n.chat-box-input {\n  flex-grow: 1;\n  border: 1px solid #e9e9e9;\n  border-radius: 30px;\n  padding: 14px 20px;\n  margin-right: 10px;\n  outline: none;\n  width: calc(100% - 52px);\n  font-size: 14px;\n}\n\n.chat-box-submit-btn {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  border: none;\n  justify-content: center;\n  align-items: center;\n  border-radius: 30px;\n  cursor: pointer;\n}\n\n.chat-box-submit-btn:disabled {\n  background-color: lightgray;\n  cursor: not-allowed;\n}\n\n.input-upload-container {\n  width: 100%;\n  position: relative;\n}\n\n.chat-box-file-input {\n  display: none;\n}\n\n.input-file-icon {\n  position: absolute;\n  right: 30px;\n  top: 10px;\n  cursor: pointer;\n}\n.page-title {\n  margin-left: 30px;\n  margin-bottom: 10px;\n  font-size: 18px;\n  font-weight: bold;\n  font-family: \"Montserrat\", serif;\n}\n.small {\n  font-size: 14px;\n}\n\n.medium {\n  font-size: 16px;\n}\n.large {\n  font-size: 18px;\n}\n.extra-large {\n  font-size: 20px;\n}\n.semi-bold {\n  font-weight: 600;\n}\n.bold {\n  font-weight: 700;\n}\n.extra-bold {\n  font-weight: 800;\n}\n@media (max-width: 600px) {\n  .chat-box-container {\n    padding: 20px 10px;\n    margin: 0 15px;\n  }\n}\n";
styleInject(css_248z$3);

const ChatBox = (props) => {
    const [message, setMessage] = useState("");
    const scrollRef = useRef(null);
    const { theme, themes, fontSize, contrast } = useTheme();
    const currentTheme = themes[theme] || themes.light;
    const handleScroll = (event) => {
        const container = event.currentTarget;
        if (props.onChatScroll)
            props.onChatScroll(event);
        if (container.scrollTop === 0 && props.onChatScrollTop)
            props.onChatScrollTop();
        if (container.scrollHeight - container.scrollTop === container.clientHeight &&
            props.onChatScrollBottom)
            props.onChatScrollBottom();
    };
    const scrollToBottom = () => {
        const container = scrollRef.current;
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    };
    useEffect(() => {
        scrollToBottom();
    }, []);
    const handleFileUpload = (event) => {
        const file = event.target.files?.[0];
        if (file && props.onFileUpload)
            props.onFileUpload(file, props.sessionId || "");
    };
    const handleSubmit = () => {
        if (message.trim()) {
            props.onChatSubmit(message, props.sessionId || "");
            setMessage("");
        }
    };
    const SendIcon = () => (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "25", height: "24.709", viewBox: "0 0 25 24.709", children: jsxRuntimeExports.jsx("path", { id: "Path_49", "data-name": "Path 49", d: "M36.065,28.271a.576.576,0,0,0-.827-.795L24.9,36.268l-5.457-2.111a1.328,1.328,0,0,1-.155-2.409L41.947,19.057a1.117,1.117,0,0,1,1.642,1.089L41.6,40.862a1.371,1.371,0,0,1-1.876,1.145l-6.642-2.572-4.169,3.907a1.077,1.077,0,0,1-1.812-.795V39.479Z", transform: "translate(-18.594 -18.924)", fill: "#fff", style: { fill: currentTheme?.btn_icon_color } }) }));
    const UploadIcon = () => (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14.998", height: "20", viewBox: "0 0 14.998 20", children: jsxRuntimeExports.jsx("path", { id: "Path_57", "data-name": "Path 57", d: "M33.308,13.091,28.9,8.681a1.519,1.519,0,0,0-1.06-.441H26.7a2.5,2.5,0,0,0-4.9,0H20.25a1.5,1.5,0,0,0-1.5,1.5v15a1.5,1.5,0,0,0,1.5,1.5h12a1.5,1.5,0,0,0,1.5-1.5V14.15A1.521,1.521,0,0,0,33.308,13.091Zm-1.27.15h-2.79a.5.5,0,0,1-.5-.5V9.95Zm-7.789-6a1.51,1.51,0,0,1,1.41,1H22.84A1.51,1.51,0,0,1,24.25,7.241Zm8.5,17.5a.51.51,0,0,1-.5.5h-12a.5.5,0,0,1-.5-.5v-15a.5.5,0,0,1,.5-.5h1.5v4.5a2.5,2.5,0,1,0,5,0v-2a1.5,1.5,0,0,0-3,0v2a.5.5,0,0,0,1,0v-2a.5.5,0,1,1,1,0v2a1.5,1.5,0,0,1-3,0v-4.5h5v3.5a1.5,1.5,0,0,0,1.5,1.5h3.5Z", transform: "translate(-18.75 -6.238)", fill: "#e31837", style: { fill: currentTheme?.btn_bg_color } }) }));
    return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("p", { className: `page-title ${fontSize} ${contrast}`, style: {
                    color: currentTheme?.primary_font_color,
                }, children: "New Chat" }), jsxRuntimeExports.jsxs("div", { className: "chat-box-container", style: {
                    backgroundColor: currentTheme?.cb_bg_color,
                    color: currentTheme?.cb_font_color,
                }, children: [jsxRuntimeExports.jsx("div", { className: "chat-box-messages", ref: scrollRef, onScroll: handleScroll, style: {
                            scrollbarColor: `${currentTheme?.scroll_bar_color} ${currentTheme?.cb_bg_color}`,
                        }, children: props.chats && props.chats.map((chat, index) => (jsxRuntimeExports.jsx(ChatCard, { type: chat.type, sender: chat.sender, text: chat.text, timestamp: chat.timestamp, userProfileImage: props.userProfileImage, userName: props.userName, aiName: props.aiName, aiProfileImage: props.aiProfileImage, ratingEnabled: chat.ratingEnabled ?? true, textFeedbackEnabled: chat.textFeedbackEnabled ?? true, isProfileImageRequired: props.isProfileImageRequired ?? false, onStarClick: props.onStarClick, feedback: chat.feedback || "", rating: chat.rating || 0, chatId: chat.chatId || "", sessionId: chat.sessionId || props.sessionId || "", onTextFeedbackSubmit: props.onTextFeedbackSubmit, actionCardTitle: chat.actionCardTitle, actions: chat.actions, actionCardSubtitle: chat.actionCardSubtitle, handleActionCardClick: props.handleActionCardClick, pdfUploaded: chat.pdfUploaded, pdfUrl: chat.pdfUrl }, index))) }), jsxRuntimeExports.jsxs("div", { className: "chat-box-input-area", children: [jsxRuntimeExports.jsxs("div", { className: "input-upload-container", children: [jsxRuntimeExports.jsx("input", { type: "text", className: `chat-box-input ${fontSize} ${contrast}`, value: message, onChange: (e) => setMessage(e.target.value), style: {
                                            backgroundColor: currentTheme?.cb_input_bg_color,
                                            borderColor: currentTheme?.cb_input_border_color,
                                            color: currentTheme?.cc_primary_font_color,
                                        } }), jsxRuntimeExports.jsx("input", { type: "file", className: "chat-box-file-input", onChange: handleFileUpload, id: "input-file" }), jsxRuntimeExports.jsx("label", { htmlFor: "input-file", className: "input-file-icon", children: jsxRuntimeExports.jsx(UploadIcon, {}) })] }), jsxRuntimeExports.jsx("button", { className: `chat-box-submit-btn ${message ? "" : "btn-disabled"}`, onClick: handleSubmit, disabled: !message, style: {
                                    backgroundColor: message
                                        ? currentTheme?.btn_bg_color
                                        : currentTheme?.cb_disabled_button_bg_color,
                                }, children: jsxRuntimeExports.jsx(SendIcon, {}) })] })] })] }));
};

var css_248z$2 = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:wght@300;400;500;600;700&display=swap\");\n\n.profile {\n  box-shadow: 0px 3px 6px #00000014;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #e31837;\n}\n\n.profile-initials {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  font-size: 16px;\n  color: #e31837;\n  box-shadow: 0px 3px 6px #00000014;\n}\n\n.web-header {\n  font-family: \"Montserrat\", serif;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0 30px;\n  width: 100%;\n  font-weight: normal;\n}\n.user-name {\n  margin-right: 20px;\n  font-size: 14px;\n}\n.collapsed-accessibility {\n  display: none;\n  box-shadow: none;\n  position: static;\n}\n.light-icon,\n.dark-icon,\n.cancel-icon {\n  display: none;\n}\n.mob-logo {\n  width: 30px;\n  height: 30px;\n}\n@media (max-width: 600px) {\n  .user-name {\n    display: none;\n  }\n  .collapsed-accessibility {\n    display: block;\n    height: 40px;\n  }\n  .light-icon,\n  .dark-icon,\n  .cancel-icon {\n    display: block;\n  }\n  .web-header {\n    justify-content: space-between;\n  }\n}\n";
styleInject(css_248z$2);

const Header = ({ userName, toggleLabel = "Dark mode", customStyles, profileStyles, isMobile = false, isChatOpen = false, setIsChatOpen, accessibilityOpen = false, setAccessibilityOpen, compactLogo, userProfileImage, }) => {
    const { theme, setTheme, themes, fontSize, contrast } = useTheme();
    const currentTheme = themes[theme] || themes.light;
    return (jsxRuntimeExports.jsxs("div", { className: "web-header", style: customStyles, children: [isMobile && (jsxRuntimeExports.jsx("div", { className: "mob-logo", children: jsxRuntimeExports.jsx("img", { className: "logo", src: compactLogo, alt: "Compact Logo" }) })), jsxRuntimeExports.jsxs("div", { style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }, children: [jsxRuntimeExports.jsx("div", { className: "light-icon", children: jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15.001", height: "15.001", viewBox: "0 0 15.001 15.001", children: jsxRuntimeExports.jsx("path", { id: "Union_25", "data-name": "Union 25", d: "M6.342,13.841v-.684a1.159,1.159,0,0,1,2.318,0v.684a1.159,1.159,0,0,1-2.318,0Zm4.825-1.035h0l-.487-.487a1.159,1.159,0,1,1,1.639-1.639l.487.487a1.159,1.159,0,0,1-1.64,1.639Zm-9.311-.819a1.188,1.188,0,0,1,.339-.832l.475-.475A1.159,1.159,0,1,1,4.311,12.32l-.43.43a1.156,1.156,0,0,1-.865.39h0A1.154,1.154,0,0,1,1.857,11.988ZM4.156,7.5a3.339,3.339,0,1,1,3.339,3.34A3.342,3.342,0,0,1,4.156,7.5Zm2.318,0a1.021,1.021,0,1,0,1.02-1.02A1.022,1.022,0,0,0,6.474,7.5Zm6.683,1.159a1.159,1.159,0,0,1,0-2.318h.684a1.159,1.159,0,0,1,0,2.318Zm-12,0a1.159,1.159,0,0,1,0-2.318h.672a1.159,1.159,0,0,1,0,2.318Zm9.522-4.338a1.157,1.157,0,0,1,0-1.639l.487-.487a1.159,1.159,0,1,1,1.639,1.639l-.487.487h0a1.161,1.161,0,0,1-1.64,0Zm-7.19.339h0Zm-.819-.339L2.2,3.845A1.159,1.159,0,0,1,3.836,2.207l.475.475A1.159,1.159,0,0,1,2.672,4.321ZM6.342,1.843V1.159a1.159,1.159,0,0,1,2.318,0v.684a1.159,1.159,0,0,1-2.318,0Z", fill: "#e31837", style: { fill: theme == "light" ? "#E31837" : "#ACACAC" } }) }) }), jsxRuntimeExports.jsx(SwitchToggle, { checked: theme === "dark", label: toggleLabel, onChange: (checked) => {
                            setTheme(checked ? "dark" : "light");
                        } }), jsxRuntimeExports.jsx("div", { style: { marginRight: "20px" }, className: "dark-icon", children: jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15.301", height: "15.001", viewBox: "0 0 15.301 15.001", children: jsxRuntimeExports.jsx("path", { id: "Path_6214", "data-name": "Path 6214", d: "M16.294,10.524A7.7,7.7,0,1,1,6.207,1.981a.358.358,0,0,1,.409.543,6,6,0,0,0,9.09,7.654.358.358,0,0,1,.589.347Z", transform: "translate(-1.003 -1.962)", fill: "#acacac", style: { fill: theme == "light" ? "#ACACAC" : "#E31837" } }) }) }), jsxRuntimeExports.jsx(AccessibilityButton, { isCollapsed: true, onAccessibilityClick: () => {
                            setAccessibilityOpen && setAccessibilityOpen(!accessibilityOpen);
                        }, className: "collapsed-accessibility" }), jsxRuntimeExports.jsxs("div", { className: "profile-wrapper", style: profileStyles, children: [jsxRuntimeExports.jsxs("p", { className: `user-name ${fontSize} ${contrast}`, style: {
                                    color: currentTheme?.font_color,
                                }, children: ["Hello ", userName] }), jsxRuntimeExports.jsx("div", { className: "profile", style: {
                                    backgroundColor: currentTheme?.profile_bg_color,
                                    color: currentTheme?.profile_font_color,
                                }, children: userProfileImage ? (jsxRuntimeExports.jsx("img", { src: userProfileImage, width: "40px", height: "40px", style: { borderRadius: "50%" }, alt: "profile" })) : (jsxRuntimeExports.jsx("div", { className: `profile-initials}`, children: userName?.charAt(0).toUpperCase() })) })] }), isMobile && isChatOpen && !accessibilityOpen && (jsxRuntimeExports.jsx("div", { style: { marginLeft: "20px" }, onClick: () => setIsChatOpen && setIsChatOpen(!isChatOpen), className: "cancel-icon", children: jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "15.001", viewBox: "0 0 15 15.001", children: jsxRuntimeExports.jsx("path", { id: "Union_19", "data-name": "Union 19", d: "M9290.113,15a.872.872,0,0,1-.627-.26L9283.5,8.754l-5.982,5.985a.9.9,0,0,1-.627.26.887.887,0,0,1-.629-1.514l5.982-5.985-5.982-5.984a.888.888,0,1,1,1.256-1.255l5.982,5.985L9289.486.26a.886.886,0,0,1,1.252,1.254L9284.752,7.5l5.986,5.987a.887.887,0,0,1-.625,1.514Z", transform: "translate(-9275.998)", fill: "#242424", style: { fill: currentTheme?.font_color } }) }) }))] })] }));
};

var css_248z$1 = "::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #242424;\n  border-radius: 20px;\n  border: 2px solid #fff;\n}\n\n::-webkit-scrollbar-track {\n  background: #fff;\n  border-radius: 5px;\n}\n\n::-webkit-scrollbar-corner {\n  background: #fff;\n}\n:root {\n  --toolbar-height: 60px;\n  --font-size: 14px;\n  --light-font-color: #fff;\n  --dark-font-color: #242424;\n  --font-color: #242424;\n  --font-family: \"Montserrat\", serif;\n  --icon-bg-color: #e31837;\n}\n.small {\n  font-size: 14px;\n}\n\n.medium {\n  font-size: 16px;\n}\n.large {\n  font-size: 18px;\n}\n.extra-large {\n  font-size: 20px;\n}\n.dark-theme {\n  --background-color: #242424;\n  --font-color: #ffffff;\n}\nbody {\n  font-family: var(--font-family);\n}\np {\n  margin: 0;\n}\n.main {\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n}\n.sidebar {\n  width: 100%;\n  max-width: 260px;\n  padding: 20px;\n  transition: max-width ease-in-out 0.2s;\n}\n.arrow {\n  position: absolute;\n  left: 290px;\n  top: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--icon-bg-color);\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n  border-radius: 50%;\n  cursor: pointer;\n  z-index: 999;\n  transition: all ease-in-out 0.2s;\n  box-shadow: 0px 3px 6px #00000014;\n}\n.arrow img {\n  cursor: pointer;\n}\n.page-layouts {\n  width: 100%;\n}\n.toolbar {\n  position: sticky;\n  top: 0;\n  height: 100%;\n  max-height: 72px;\n  display: flex;\n  justify-content: flex-end;\n  min-height: 72px;\n}\n.main-pages {\n  height: calc(100vh - 72px);\n}\n.collapsed {\n  max-width: 70px;\n  padding: 0;\n}\n.collapsed-arrow {\n  left: 60px;\n}\n.collapsed-arrow img {\n  transform: rotate(180deg);\n}\n.collapsed-menu {\n  margin-top: 30px;\n  display: flex;\n  justify-content: center; /* Horizontally center */\n  align-items: center;\n}\n.history-box-button {\n  margin-left: 0;\n}\n.logo-wrapper {\n  display: flex;\n  justify-content: center; /* Horizontally center */\n  align-items: center;\n}\n.icon-view {\n  padding-top: 20px;\n}\n@media (min-width: 768px) and (max-width: 1024px) {\n  .sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    z-index: 9;\n  }\n  .collapsed {\n    position: relative;\n  }\n}\n@media (max-width: 600px) {\n  .arrow {\n    display: none;\n  }\n  .sidebar {\n    margin: 0 auto;\n    width: calc(100% - 60px);\n  }\n}\n";
styleInject(css_248z$1);

var css_248z = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:wght@300;400;500;600;700&display=swap\");\n\n.accessibility-container {\n  display: flex;\n  flex-direction: column;\n  border-radius: 20px;\n  height: calc(100vh - 170px);\n  overflow: hidden;\n  margin: 0 30px;\n  margin-bottom: 20px;\n  background-color: #fbfbfb;\n  padding: 30px 20px 20px 30px;\n  overflow-y: auto;\n}\n.page-title {\n  margin-left: 30px;\n  margin-bottom: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n.font-container {\n  font-size: 14px;\n  font-weight: 600;\n  padding-right: 10px;\n  padding-left: 20px;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  min-height: 48px;\n  max-height: 48px;\n  height: 100%;\n  cursor: pointer;\n}\n.font-container .selected,\n.contrast-container .selected {\n  background-color: #e31837;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 30px;\n}\n\n.font-container-14 {\n  font-size: 14px;\n}\n.font-container-16 {\n  font-size: 16px;\n}\n.font-container-18 {\n  font-size: 18px;\n}\n.font-container-20 {\n  font-size: 20px;\n}\n.contrast-wrapper {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 40px;\n}\n.contrast-container {\n  border: 1px solid #e9e9e9;\n  border-radius: 10px;\n  padding: 10px 10px 18px 20px;\n  width: 28%;\n  cursor: pointer;\n}\n\n.selected-setting {\n  border-color: #e31837 !important;\n}\n.selected-wrapper {\n  display: flex;\n  justify-content: end;\n  margin-bottom: 18px;\n  height: 50px;\n}\n.contrast-semibold {\n  font-weight: 600;\n}\n.contrast-bold {\n  font-weight: 700;\n}\n.contrast-extrabold {\n  font-weight: 800;\n}\n.small {\n  font-size: 14px;\n}\n\n.medium {\n  font-size: 16px;\n}\n.large {\n  font-size: 18px;\n}\n.extra-large {\n  font-size: 20px;\n}\n.semi-bold {\n  font-weight: 600;\n}\n.bold {\n  font-weight: 700;\n}\n.extra-bold {\n  font-weight: 800;\n}\n\n@media (max-width: 1200px) {\n  .contrast-wrapper {\n    flex-wrap: wrap;\n  }\n  .contrast-container {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n}\n@media (max-width: 600px) {\n  .font-container {\n    min-height: auto;\n    max-height: 100%;\n    padding: 10px;\n  }\n  .font-container .selected {\n    display: none;\n  }\n  .selected-wrapper {\n    display: none;\n  }\n  .accessibility-container {\n    padding: 20px 10px;\n  }\n}\n";
styleInject(css_248z);

const Accessibility = () => {
    const { theme, themes, setFontSize, fontSize, contrast, setContrast } = useTheme();
    const fontSizes = [
        { size: "14px", label: "font-container-14", name: "small" },
        { size: "16px", label: "font-container-16", name: "medium" },
        { size: "18px", label: "font-container-18", name: "large" },
        { size: "20px", label: "font-container-20", name: "extra-large" },
    ];
    const contrasts = [
        { contrast: "semi-bold", label: "contrast-semibold" },
        { contrast: "bold", label: "contrast-bold" },
        { contrast: "extra-bold", label: "contrast-extrabold" },
    ];
    const handleFontSizeSelect = (name) => {
        setFontSize(name);
    };
    const handleContrastSelect = (contrast) => {
        setContrast(contrast);
    };
    const currentTheme = themes[theme] || themes.light;
    const SelectedIcon = () => (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "11", viewBox: "0 0 15 11", children: jsxRuntimeExports.jsx("path", { id: "Path_6229", "data-name": "Path 6229", d: "M13.614,21.306h0a1.523,1.523,0,0,1-1.06-.426L8.928,17.359a1.415,1.415,0,0,1,0-2.049,1.533,1.533,0,0,1,2.118,0l2.567,2.492,7.317-7.075a1.535,1.535,0,0,1,2.119,0,1.417,1.417,0,0,1,0,2.049l-8.378,8.1A1.531,1.531,0,0,1,13.614,21.306Z", transform: "translate(-8.491 -10.307)", fill: "#fff", style: { fill: currentTheme?.btn_icon_color } }) }));
    return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("p", { className: `page-title ${fontSize} ${contrast}`, style: {
                    color: currentTheme?.primary_font_color,
                }, children: "Accessibility Settings" }), jsxRuntimeExports.jsxs("div", { className: "accessibility-container", style: {
                    backgroundColor: currentTheme?.cb_bg_color,
                    color: currentTheme?.primary_font_color,
                }, children: [fontSizes.map((font) => (jsxRuntimeExports.jsxs("div", { className: `font-container ${font.label} ${fontSize === font?.name ? "selected-setting" : ""}`, onClick: () => handleFontSizeSelect(font?.name), style: { borderColor: currentTheme?.cb_input_border_color }, children: [jsxRuntimeExports.jsx("p", { children: "I can read this font size comfortably." }), fontSize === font?.name && (jsxRuntimeExports.jsx("div", { className: "selected", children: jsxRuntimeExports.jsx(SelectedIcon, {}) }))] }, font.size))), jsxRuntimeExports.jsx("div", { className: "contrast-wrapper", children: contrasts.map((item) => (jsxRuntimeExports.jsxs("div", { className: `contrast-container ${item.label} ${contrast === item.contrast ? "selected-setting" : ""}`, onClick: () => handleContrastSelect(item.contrast), style: { borderColor: currentTheme?.cb_input_border_color }, children: [jsxRuntimeExports.jsx("div", { className: "selected-wrapper", children: contrast === item.contrast && (jsxRuntimeExports.jsx("div", { className: "selected", children: jsxRuntimeExports.jsx(SelectedIcon, {}) })) }), jsxRuntimeExports.jsx("p", { children: "This contrast is comfortable." })] }, item.contrast))) })] })] }));
};

const MobileChatbot = (props) => {
    const [accessibilityOpen, setAccessibilityOpen] = useState(false);
    const [ischatOpen, setIsChatOpen] = useState(false);
    const { theme, themes } = useTheme();
    const currentTheme = themes[theme] || themes.light;
    return (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsxs("div", { className: `page-layouts`, style: {
                backgroundColor: currentTheme?.main_container_bg,
                maxWidth: "600px",
            }, children: [jsxRuntimeExports.jsx("div", { className: "toolbar", children: jsxRuntimeExports.jsx(Header, { userName: props.userName || "", toggleLabel: "Enable Dark Theme", isMobile: props.isMobile, isChatOpen: ischatOpen, setIsChatOpen: setIsChatOpen, accessibilityOpen: accessibilityOpen, setAccessibilityOpen: setAccessibilityOpen, compactLogo: props.compactLogo }) }), !ischatOpen && !accessibilityOpen && (jsxRuntimeExports.jsx("div", { className: "main-pages", children: jsxRuntimeExports.jsx(HistoryBox, { history: props.history, onSearchChange: props.onSearchChange, onCardClick: props.onCardClick, onCreateNewChat: props.onCreateNewChat, 
                        // logo={logo}
                        isCollapsed: false, accessibilityOpen: accessibilityOpen, setAccessibilityOpen: setAccessibilityOpen, isMobile: props.isMobile, setIsChatOpen: setIsChatOpen, onHistoryScroll: props.onHistoryScroll, onHistoryScrollTop: props.onHistoryScrollTop, onHistoryScrollBottom: props.onHistoryScrollBottom, fullLogo: props.fullLogo, compactLogo: props.compactLogo }) })), ischatOpen && !accessibilityOpen && (jsxRuntimeExports.jsx("div", { className: "main-pages", children: jsxRuntimeExports.jsx(ChatBox, { chats: props.chats, onChatSubmit: props.onChatSubmit, onChatScroll: props.onChatScroll, onChatScrollBottom: props.onChatScrollBottom, onChatScrollTop: props.onChatScrollTop, onFileUpload: props.onFileUpload, sessionId: props.sessionId, onStarClick: props.onStarClick, onTextFeedbackSubmit: props.onTextFeedbackSubmit, userName: props.userName, userProfileImage: props.userProfileImage, aiName: props.aiName, aiProfileImage: props.aiProfileImage, isProfileImageRequired: props.isProfileImageRequired, handleActionCardClick: props.handleActionCardClick }) })), accessibilityOpen && (jsxRuntimeExports.jsx("div", { className: "main-pages", children: jsxRuntimeExports.jsx(Accessibility, {}) }))] }) }));
};

const WebChatbot = (props) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [accessibilityOpen, setAccessibilityOpen] = useState(false);
    const { theme, themes } = useTheme();
    const currentTheme = themes[theme] || themes.light;
    const toggleSidebar = () => {
        setIsCollapsed((prev) => !prev);
    };
    const ArrowIcon = () => (jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "5.112", height: "10", viewBox: "0 0 5.112 10", children: jsxRuntimeExports.jsx("g", { id: "Group_1476", "data-name": "Group 1476", transform: "translate(0)", children: jsxRuntimeExports.jsx("path", { id: "Path_42", "data-name": "Path 42", d: "M27,962.325a.555.555,0,0,1,.142-.333l4-4.444a.556.556,0,0,1,.826.743L28.3,962.363l3.667,4.073a.556.556,0,0,1-.826.743l-4-4.444A.556.556,0,0,1,27,962.325Z", transform: "translate(-26.994 -957.363)", fill: "#fff", style: { fill: currentTheme?.btn_icon_color } }) }) }));
    return (jsxRuntimeExports.jsxs("div", { className: "main", children: [jsxRuntimeExports.jsxs("div", { className: ` ${isCollapsed ? "collapsed-arrow" : ""} arrow`, onClick: toggleSidebar, children: [jsxRuntimeExports.jsx(ArrowIcon, {}), " "] }), jsxRuntimeExports.jsx(HistoryBox, { history: props.history, onSearchChange: props.onSearchChange, onCardClick: props.onCardClick, onCreateNewChat: props.onCreateNewChat, 
                // logo={logo}
                isCollapsed: isCollapsed, setIsCollapsed: setIsCollapsed, accessibilityOpen: accessibilityOpen, setAccessibilityOpen: setAccessibilityOpen, onHistoryScroll: props.onHistoryScroll, onHistoryScrollTop: props.onHistoryScrollTop, onHistoryScrollBottom: props.onHistoryScrollBottom, fullLogo: props.fullLogo, compactLogo: props.compactLogo }), jsxRuntimeExports.jsxs("div", { className: `page-layouts ${isCollapsed ? "full-width" : ""}`, style: { backgroundColor: currentTheme?.main_container_bg }, children: [jsxRuntimeExports.jsx("div", { className: "toolbar", children: jsxRuntimeExports.jsx(Header, { userName: props.userName, 
                            // handleToggle={onToggleTheme}
                            userProfileImage: props.userProfileImage, toggleLabel: "Enable Dark Theme" }) }), jsxRuntimeExports.jsx("div", { className: "main-pages", children: accessibilityOpen ? (jsxRuntimeExports.jsx(Accessibility, {})) : (jsxRuntimeExports.jsx(ChatBox, { chats: props.chats, onChatSubmit: props.onChatSubmit, onChatScroll: props.onChatScroll, onChatScrollBottom: props.onChatScrollBottom, onChatScrollTop: props.onChatScrollTop, onFileUpload: props.onFileUpload, sessionId: props.sessionId, onStarClick: props.onStarClick, onTextFeedbackSubmit: props.onTextFeedbackSubmit, userName: props.userName, userProfileImage: props.userProfileImage, aiName: props.aiName, aiProfileImage: props.aiProfileImage, isProfileImageRequired: props.isProfileImageRequired, handleActionCardClick: props.handleActionCardClick })) })] })] }));
};

const FullChatbot = (props) => {
    const [isMobile, setIsMobile] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 600) {
                setIsMobile(true);
            }
            else {
                setIsMobile(false);
            }
        };
        handleResize();
    }, []);
    const commonProps = {
        history: props.history,
        chats: props.chats,
        onChatSubmit: props.onChatSubmit,
        onChatScroll: props.onChatScroll,
        onChatScrollTop: props.onChatScrollTop,
        onChatScrollBottom: props.onChatScrollBottom,
        onFileUpload: props.onFileUpload,
        onSearchChange: props.onSearchChange,
        onCardClick: props.onCardClick,
        onCreateNewChat: props.onCreateNewChat,
        sessionId: props.sessionId,
        onStarClick: props.onStarClick,
        onTextFeedbackSubmit: props.onTextFeedbackSubmit,
        userName: props.userName,
        userProfileImage: props.userProfileImage,
        aiName: props.aiName,
        aiProfileImage: props.aiProfileImage,
        isProfileImageRequired: props.isProfileImageRequired,
        onHistoryScroll: props.onHistoryScroll,
        onHistoryScrollTop: props.onHistoryScrollTop,
        onHistoryScrollBottom: props.onHistoryScrollBottom,
        fullLogo: props.fullLogo,
        compactLogo: props.compactLogo,
        isMobile: isMobile,
        handleActionCardClick: props.handleActionCardClick,
    };
    return (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx(ThemeProvider, { children: !isMobile ? (jsxRuntimeExports.jsx(WebChatbot, { ...commonProps })) : (jsxRuntimeExports.jsx(MobileChatbot, { ...commonProps })) }) }));
};

export { Button, ChatBox, ChatCard, FullChatbot, Header, HistoryBox, HistoryCard, SwitchToggle };
//# sourceMappingURL=index.js.map
