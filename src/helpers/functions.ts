export function logError(error: Error, info: { componentStack?: string | null | undefined }) {
  console.log('Error:', error);
  console.error('Error:', error);
  console.info('Component Stack:', info.componentStack || 'No component stack available');
}
