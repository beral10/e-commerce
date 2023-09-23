export const valueWithStyles = (value) => {
    const stringValue = value.toString();

    const [entero, decimal] = stringValue.split('.');

    return(
        <>
            <span className="font-bold text-2xl">{entero}</span>
            {
                decimal && <span className="font-normal text-sm">.{decimal}</span>
            }
        </>
    )
}