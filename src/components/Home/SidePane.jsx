import { Pane,Button,Typography,Checkbox } from "@bigbinary/neetoui/v2";
import {React} from 'react'
import {Check} from '@bigbinary/neeto-icons'


const SidePane = ({showFilter,setShowFilter}) => {
    const categories = ['All','National','Business','Sports','World'];
  return (
    <div className="w-full">
      <Pane isOpen={showFilter} onClose={() => setShowFilter(false)}>
        <Pane.Header>
          <Typography style="h2" weight="semibold">
            Filter Articles
          </Typography>
        </Pane.Header>
        <Pane.Body>
          <Typography style="h4">
            Category
          </Typography>
          <div>
              {categories.map(items=>(
                  <Checkbox className="ml-3 mt-8"
                  id={items}
                  label={items}
                />
              ))}
          </div>
        </Pane.Body>
        <Pane.Footer className="flex items-center space-x-2">
          <Button
            icon={Check}
            size="large"
            label="Save Changes"
            onClick={() => setShowFilter(false)}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => setShowFilter(false)}
          />
        </Pane.Footer>
      </Pane>
    </div>
  );

}

export default SidePane