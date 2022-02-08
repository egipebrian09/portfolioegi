function Button({ children, variant }) {

    const variants = {
        "outline-yellow": 'text-yellow-300 border-yellow-300 rounded-full',
        "fill-yellow": 'bg-yellow-300 rounded-full'
    }

    const pickedVariant = variants [variant];

    return (
        <div className="text-center">
            <a className={'border px-10 py-2 font-semibold rexr-lg inline-block ${pickedVariant}'}>{children}</a>
          </div>
    );
}

export default button; 