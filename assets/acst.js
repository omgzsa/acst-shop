export default {
  // Global styles apply to _all_ inputs with matching section keys
  global: {
    fieldset: 'max-w-md border border-gray-400 rounded px-2 pb-1',
    help: 'text-xs text-gray-500',
    inner:
      'formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none',
    input:
      'appearance-none bg-transparent focus:outline-none focus:ring-0 focus:shadow-none',
    label: 'block mb-1 font-bold text-sm',
    legend: 'font-bold text-sm',
    loaderIcon: 'inline-flex items-center w-4 text-gray-600 animate-spin',
    message: 'text-red-500 mb-1 text-xs',
    messages: 'list-none p-0 mt-1 mb-0',
    outer: 'mb-4 formkit-disabled:opacity-50',
    prefixIcon:
      'w-10 flex self-stretch grow-0 shrink-0 rounded-tl rounded-bl border-r border-gray-400 bg-white bg-gradient-to-b from-transparent to-gray-200 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto',
  },
  // Family styles apply to all inputs that share a common family
  'family:box': {
    // decorator:
    //   'block relative h-5 w-5 mr-2 rounded bg-white bg-gradient-to-b from-transparent to-gray-200 ring-1 ring-gray-400 peer-checked:ring-accent-200 text-transparent peer-checked:text-accent-200',
    // decoratorIcon:
    //   'flex p-[3px] w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
    help: 'mb-2 mt-1.5',
    // input:
    //   'absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none peer',
    inner: '$remove:formkit-disabled:bg-gray-200',
    label: '$reset text-sm text-gray-700 mt-1 select-none',
    wrapper: 'flex items-center mb-1 gap-x-2',
  },
  'family:button': {
    input:
      'inline-flex items-center bg-accent-100 text-dark-100 text-sm font-semibold py-2 px-4 rounded focus-visible:outline-2 focus-visible:outline-accent-100 focus-visible:outline-offset-2 formkit-disabled:bg-gray-400 formkit-loading:before:w-4 formkit-loading:before:h-4 formkit-loading:before:mr-2 formkit-loading:before:border formkit-loading:before:border-2 formkit-loading:before:border-r-transparent formkit-loading:before:rounded-3xl formkit-loading:before:border-white formkit-loading:before:animate-spin',
    wrapper: 'mb-1',
    prefixIcon: '$reset block w-4 -ml-2 mr-2 stretch',
    suffixIcon: '$reset block w-4 ml-2 stretch',
  },
  'family:text': {
    inner:
      'flex items-center max-w-md ring-1 ring-gray-400 focus-within:ring-accent-200 focus-within:ring-2 [&>label:first-child]:focus-within:text-accent-200 rounded mb-1',
    input:
      'w-full px-3 py-2 border-none text-base text-gray-700 placeholder-gray-400',
  },
  radio: {
    decorator: 'rounded-full',
    decoratorIcon: 'w-5 p-[5px]',
  },
};
