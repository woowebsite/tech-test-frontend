import React, {
  useState,
  forwardRef,
  KeyboardEventHandler,
  FormEventHandler,
} from "react";

interface SearchInputProps {
  onSearch: any;
}

const SearchInput = forwardRef<any, SearchInputProps>(
  (props: SearchInputProps, ref) => {
    // DEFINE
    const [searchTerm, setSearchTerm] = useState("");
    const { onSearch } = props;

    // EVENTS
    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
      event.preventDefault();
      if (searchTerm.length > 2) {
        onSearch(searchTerm);
      }
    };

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (
      event
    ) => {
      setSearchTerm(event.target.value);
    };

    const handleOnKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
      if (event.key === "Enter") {
        if (searchTerm.length > 2) {
          onSearch(searchTerm);
        }
      }
    };

    return (
      <div className="mb-5">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="inputJob">Find a job</label>
            <input
              id="inputJob"
              type="text"
              className="form-control"
              placeholder="Type something.."
              value={searchTerm}
              onKeyDown={handleOnKeyDown}
              onChange={handleOnChange}
            />
            <small className="form-text text-muted">
              Please input at least 3 characters
            </small>
          </div>
        </form>
      </div>
    );
  }
);

export default SearchInput;
