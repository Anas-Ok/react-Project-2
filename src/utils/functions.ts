export function textSlicer(text: string): string {
    const limit = 50;
    if (text.length > limit) {
        return text.slice(0, limit) + '...';
    }
    return text;
}