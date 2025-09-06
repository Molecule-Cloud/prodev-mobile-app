import { styles as mainStyles } from './_mainstyle';
import { styles as joinStyles } from './_joinstyle';

// Export join styles as the default styles since they're used in join and signin pages
export const styles = joinStyles;

// Export main styles separately for the main page
export const mainPageStyles = mainStyles;
