import os
import fnmatch

def list_files(startpath, ignore_patterns=None, include_patterns=None):
    if ignore_patterns is None:
        ignore_patterns = []
    if include_patterns is None:
        include_patterns = ['*']  # Default to include all

    for root, dirs, files in os.walk(startpath):
        # Remove directories to ignore from the list
        dirs[:] = [d for d in dirs if not any(fnmatch.fnmatch(d, pattern) for pattern in ignore_patterns)]
        
        # Calculate indentation for displaying the tree
        level = root.replace(startpath, '').count(os.sep)
        indent = ' ' * 4 * level
        print('{}{}/'.format(indent, os.path.basename(root)))
        
        subindent = ' ' * 4 * (level + 1)

        # List files in the directory, excluding the ignored ones and including only those that match the include patterns
        for f in files:
            if any(fnmatch.fnmatch(f, pattern) for pattern in ignore_patterns):
                continue
            if any(fnmatch.fnmatch(f, pattern) for pattern in include_patterns):
                print('{}{}'.format(subindent, f))

if __name__ == "__main__":
    # Define the directory to start listing from
    start_directory = '/Users/ammaralzureiqi/Desktop/ammar.1/Projects/zyumn.ai'
    
    # Files or directories to ignore
    ignore_list = ['*.log', '*.tmp', 'node_modules', '__pycache__', '.next', '.git']

    # Files to include (can be used to include specific types of files, e.g., '*.py')
    include_list = ['*.py', '*.md', '*']  # Default to include all files

    # Call the list_files function
    list_files(start_directory, ignore_patterns=ignore_list, include_patterns=include_list)
