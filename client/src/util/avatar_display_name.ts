
export const getInitials = (displayName: string) => {
    const parts = displayName.split(" ");

    switch (parts.length) {
        case 0: return "An";
        case 1: return parts[0].charAt(0);
        default: return `${parts[0].charAt(0).toUpperCase()}${parts[1].charAt(0).toUpperCase()}`;
    }
}

const stringToColor = (string: string) => {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    let color = '#';
    
    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
      /* eslint-enable no-bitwise */
    
    return color;
}

export const avatarColorFromName = (displayName: string) => {
    return {
        sx: {
            bgcolor: stringToColor(displayName),
        },
        alt: displayName,
        children: getInitials(displayName),
    };
}