<?php


namespace SilverStripe\SnapshotAdmin;


use GraphQL\Type\Definition\EnumType;
use SilverStripe\Core\Injector\Injectable;
use SilverStripe\Snapshots\ActivityEntry;

class SnapshotActivityType
{
    use Injectable;

    /**
     * @var EnumType
     */
    private $type;

    public function getType(): EnumType
    {
        if (!$this->type) {
            $this->type = new EnumType([
                'name' => 'SnapshotActivityType',
                'values' => [
                    ActivityEntry::ADDED,
                    ActivityEntry::CREATED,
                    ActivityEntry::DELETED,
                    ActivityEntry::MODIFIED,
                    ActivityEntry::PUBLISHED,
                    ActivityEntry::UNPUBLISHED,
                    ActivityEntry::REMOVED,
                ]
            ]);
        }

        return $this->type;
    }
}
