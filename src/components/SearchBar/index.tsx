import React, {Fragment} from 'react';
import {StyledInput} from './styles';

interface Props {
    searchTerm: string;
    setSearchTerm: (value: string) => void,
    isLoading: boolean,
    foundUsers: boolean
}

const SearchBar = ({searchTerm = '', setSearchTerm, isLoading, foundUsers = false}: Props) => {
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return isLoading ? null : (
        <React.Fragment>
            <StyledInput type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
            {!foundUsers && !!searchTerm.length && <div>Nothing found 😔.</div>}
        </React.Fragment>
    );
};

export default SearchBar;
