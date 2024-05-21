import React, { useState, useEffect } from 'react';
import { InputBase, Paper, IconButton, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch } from './redux/store';
import { CityType } from './types/City.type';
import { actions } from './redux/model/toursActions';

export const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [cities, setCities] = useState<CityType[]>([])
    const [filteredCities, setFilteredCities] = useState<CityType[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [selectedCity, setSelectedCity] = useState<CityType | null>(null)

    const dispatch = useAppDispatch()

    useEffect(() => {
        setIsLoading(true)
        const timeout = setTimeout(() => {
            setCities([
                { id: 1, name: 'Lviv' },
                { id: 2, name: 'Lutsk' },
                { id: 3, name: 'Khmelnytskyi' },
                { id: 4, name: 'Cherkasy' },
                { id: 5, name: 'Kyiv' },
            ])
            setIsLoading(false)
        }, 1000)

        return () => clearTimeout(timeout)
    }, [])

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setSearchTerm(value)

        const filtered = cities.filter(city =>
            city.name.toLowerCase().includes(value.toLowerCase())
        )
        setFilteredCities(filtered)
    }

    const handleCitySelect = (city: CityType) => {
        setSelectedCity(city)
        setSearchTerm(city.name)
    }

    const onSubmit = () => {
        dispatch(actions.getToursByCity(selectedCity?.name))
    }

    return (
        <div className='search__bar'>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Область"
                    inputProps={{ 'aria-label': 'search cities' }}
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <IconButton sx={{ p: '10px' }} aria-label="search" onClick={onSubmit}>
                    <SearchIcon />
                </IconButton>
            </Paper>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <List>
                        {filteredCities.map((city) => (
                            <ListItem
                                key={city.id}
                                button
                                onClick={() => handleCitySelect(city)}
                                selected={selectedCity?.id === city.id}
                            >
                                {city.name}
                            </ListItem>
                        ))}
                    </List>
                </div>
            )}
        </div>
    )
}