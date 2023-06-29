import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import Calendar from './Calendar'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

const App = () => {
	return (
		<div className='app'>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<Calendar />
				</QueryClientProvider>
			</BrowserRouter>
		</div>
	);
};

export default App;
