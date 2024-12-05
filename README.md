# Pokémon Explorer
A Pokémon Explorer app built with React.js and Next.js, featuring sorting, filtering, and pagination. The application uses React Query for data fetching, Axios for API calls, and Tailwind CSS for styling.
---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Chakravarthy-E/pokemon-app.git
```

### 2. Install Dependencies

```bash
pnpm install
```
### 4. Running the App

To start the development server, run:

```bash
pnpm dev
```
This will launch the app in development mode at [http://localhost:3000](http://localhost:3000).

# Explanation of Approach
### 1.Data Fetching:
 - Used React Query to handle data fetching, caching, and error states.
 - Fetched Pokémon data from the Pokémon API, including their details, types, and images.
   
### 2.Filtering and Sorting:
 - Implemented filtering by Pokémon type and name using useMemo for optimized re-renders.
 - Added sorting by base experience, toggled via a button.

### 3.Pagination:
 - Divided the Pokémon list into pages, allowing users to navigate between them using "Previous" and "Next" buttons.
 - Pagination logic dynamically adjusts based on the total Pokémon available after filtering.
   
### 4.Responsive Design:
 - Tailwind CSS was used to ensure the UI is responsive and user-friendly across all device sizes.

# Challenges and Trade-Offs
### 1.API Limitations:
 - The Pokémon API provides Pokémon data in batches. To retrieve details for all Pokémon, additional API calls were required for each Pokémon.
 - Trade-Off: Increased network requests but ensured detailed Pokémon data for the app.
### 2.Performance:
 - Fetching and processing Pokémon details can be slow due to the API's nested structure.
 - Solution: Optimized rendering using useMemo for filtering and sorting.
### 3.Pagination Logic:
- Implementing pagination dynamically with filtered data posed challenges in maintaining state consistency.
- Solution: Used derived state logic to handle paginated results effectively.
### 4.Error Handling:
- Managing API errors and ensuring fallback UI elements like loaders and error messages was critical.
- Solution: React Query's built-in isError and isLoading states simplified this process.

# Features
 - Search Pokémon: Search for Pokémon by name.
 - Filter by Type: Dynamically filter Pokémon based on their types.
 - Sort by Experience: Sort Pokémon by their base experience level.
 - Pagination: Browse Pokémon in manageable pages.
 - Responsive Design: Fully functional across various screen sizes.
