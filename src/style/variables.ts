type SpacingUnitsType = (spacingMultiple: number) => string;

const spacingIncrement = 4;

const spacingUnits: SpacingUnitsType = (spacingMultiple: number) => `${spacingIncrement * spacingMultiple}px`;

export {
    spacingUnits,
};
